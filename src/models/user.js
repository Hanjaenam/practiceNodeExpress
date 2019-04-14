import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: { type: String, index: 'hashed' },
  hashed_password: { type: String, required: true },
  salt: { type: String, reuiqred: true },
  age: { type: Number, default: -1 },
  created_at: { type: Date, default: Date.now },
});

UserSchema.methods.makeSalt = () => {
  return `${Math.round(new Date().valueOf() * Math.random())}`;
};

UserSchema.methods.encryptPassword = function(plainText, inSalt) {
  if (inSalt) {
    return crypto
      .createHmac('sha1', inSalt)
      .update(plainText)
      .digest('hex');
  }
  return crypto
    .createHmac('sha1', this.salt)
    .update(plainText)
    .digest('hex');
};

UserSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

UserSchema.methods.authenticate = function(plainText, inSalt, hashedPassword) {
  if (inSalt) {
    return this.encryptPassword(plainText, inSalt) === hashedPassword;
  }
  return this.encryptPassword(plainText) === hashedPassword;
};

// UserSchema.path('email').validate({
//   validator: email => {
//     return email > 5;
//   },
//   message: props => {
//     return `${props.path} must have length 5, got '${props.value}'`;
//   },
// });

UserSchema.static('findByEmail', function(email, cb) {
  return this.find({ email }, cb);
});

const model = mongoose.model('user', UserSchema);
export default model;
