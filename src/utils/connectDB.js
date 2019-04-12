import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const dbConnection = mongoose.connection;

const handleOpen = () => {
  console.log(`Connection to DB: ${process.env.MONGO_URI}`);
};
const handleError = error => {
  console.log(`Error on DB Connection: ${error}`);
};
dbConnection.once('open', handleOpen);
dbConnection.on('error', handleError);
