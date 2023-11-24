import { model, Schema } from 'mongoose';

const urlSchema = new Schema({
  shortID: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
    unique: true,
  },
  visitHistory: [{
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true
});

const Url = model('Url', urlSchema);

export default Url;
