import mongoose from 'mongoose';
import CommentSchema from './schema';

export default mongoose.model('Comment', CommentSchema);
