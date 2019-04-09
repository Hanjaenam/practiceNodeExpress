import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const model = mongoose.model('user', UserSchema);
export default model;
