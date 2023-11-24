import { nanoid } from 'nanoid';
import Url from '../models/url.mjs';

export async function handleGenerateShortUrl(req, res) {
  const { redirectUrl } = req.body;

  if (!redirectUrl) {
    return res.status(400).send({
      message: 'redirectUrl is required',
    });
  }
  
  const shortID = nanoid(8);

  try {
    await Url.create({
      shortID,
      redirectUrl,
    });
  
    res.send({ id: shortID });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

export async function handleRedirectToUrl(req, res) {
  const { shortID } = req.params;

  if (!shortID) {
    return res.status(400).send({
      message: 'shortID is required',
    });
  }

  try {
    const urlObj = await Url.findOneAndUpdate(
      { shortID },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!urlObj) {
      return res.status(404).send({
        message: 'Short URL not found',
      });
    }

    res.redirect(urlObj.redirectUrl);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

export async function handleGetAnalytics(req, res) {
  const { shortID } = req.params;

  if (!shortID) {
    return res.status(400).send({
      message: 'shortID is required',
    });
  }

  try {
    const urlObj = await Url.findOne({ shortID });

    if (!urlObj) {
      return res.status(404).send({
        message: 'Short URL not found',
      });
    }

    res.send({
      totalClicks: urlObj.visitHistory.length,
      visitHistory: urlObj.visitHistory,
    });

  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}
