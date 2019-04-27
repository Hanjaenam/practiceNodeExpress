import mongoose from 'mongoose';

export default new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  provider: {
    type: String,
    default: 'naver',
  },
  data: {
    type: Map,
  },
});
