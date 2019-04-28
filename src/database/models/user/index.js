import mongoose from 'mongoose';
import UserSchema from './schema';
import * as methods from './methods';
import * as statics from './statics';
import * as virtuals from './virtuals';
import * as validators from './validators';

UserSchema.virtual('password')
  .set(virtuals.setPassword)
  .get(virtuals.getPassword);

UserSchema.method({
  ...methods,
});

UserSchema.static({
  ...statics,
});

UserSchema.path('age').validate(validators.age);
UserSchema.path('birthday').validate(validators.birthday);
UserSchema.path('email').validate(validators.email);
UserSchema.path('hashedPassword').validate(validators.password);
UserSchema.path('phoneNumber').validate(validators.phoneNumber);

export default mongoose.model('User', UserSchema);
