import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
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
    type: Number,
    index: 'hashed',
    unique: true,
  },
});

UserSchema.virtual('password').set(function(password) {
  this.salt = this.makeSalt();
  this.hashedPassword = this.encryptPassword(password, this.salt);
});
UserSchema.methods.makeSalt = () => {
  return `${Math.round(new Date().valueOf() * Math.random())}`;
};
UserSchema.methods.encryptPassword = function(password, salt) {
  if (salt) {
    return crypto
      .createHmac('sha1', salt)
      .update(password)
      .digest('hex');
  }
  return crypto
    .createHmac('sha1', this.salt)
    .update(password)
    .digest('hex');
};
UserSchema.methods.authenticate = function(password, salt) {
  if (salt) {
    return this.encryptPassword(password, salt) === this.hashedPassword;
  }
  return this.encryptPassword(password) === this.hashedPassword;
};

UserSchema.static('findByEmail', function(email, cb) {
  return this.find({ email }, cb);
});

const model = mongoose.model('user', UserSchema);
export default model;

// UserSchema.virtual('password')
//   .set(function(password) {
//     this._password = password;
//     this.salt = this.makeSalt();
//     this.hashed_password = this.encryptPassword(password);
//   })
//   .get(function() {
//     return this._password;
//   });

// UserSchema.methods.authenticate = function(plainText, inSalt, hashedPassword) {
//   if (inSalt) {
//     return this.encryptPassword(plainText, inSalt) === hashedPassword;
//   }
//   return this.encryptPassword(plainText) === hashedPassword;
// };

// UserSchema.path('email').validate({
//   validator: email => {
//     return email > 5;
//   },
//   message: props => {
//     return `${props.path} must have length 5, got '${props.value}'`;
//   },
// });

// UserSchema.static('findByEmail', function(email, cb) {
//   return this.find({ email }, cb);
// });
