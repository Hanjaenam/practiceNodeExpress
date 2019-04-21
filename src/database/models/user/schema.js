import mongoose from 'mongoose';

export default new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  profilePhotoUrl: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: String,
    index: 'hashed',
    unique: true,
  },
});
