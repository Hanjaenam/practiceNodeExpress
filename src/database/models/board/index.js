import mongoose from 'mongoose';
import BoardSchema from './schema';

export default mongoose.model('Board', BoardSchema);
