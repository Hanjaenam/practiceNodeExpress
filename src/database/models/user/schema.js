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
    required() {
      return this.facebookId === undefined && this.phoneNumber === undefined;
    },
  },
  isMan: {
    type: Boolean,
  },
  age: {
    type: String,
  },
  birthday: {
    type: String,
    // required: false,
  },
  hashedPassword: {
    type: String,
    required() {
      const isLocalId =
        this.naverId === undefined && this.googleId === undefined && this.facebookId === undefined;
      return isLocalId;
    },
  },
  salt: {
    type: String,
    required() {
      const isLocalId =
        this.naverId === undefined && this.googleId === undefined && this.facebookId === undefined;
      return isLocalId;
    },
  },
  phoneNumber: {
    type: String,
    required() {
      return this.facebookId === undefined && this.email === undefined;
    },
    unique: true,
  },
  naverId: {
    type: Number,
  },
  googleId: {
    type: Number,
  },
  facebookId: {
    type: Number,
  },
});
