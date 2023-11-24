import { Router } from 'express';
import {
  handleGenerateShortUrl,
  handleRedirectToUrl,
  handleGetAnalytics,
} from '../controllers/url.mjs';

const router = Router();

router.post('/', handleGenerateShortUrl);
router.get('/:shortID', handleRedirectToUrl);
router.get('/analytics/:shortID', handleGetAnalytics);

export default router;
