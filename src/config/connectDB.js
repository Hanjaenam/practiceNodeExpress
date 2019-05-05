import mongoose from 'mongoose';

mongoose.Promise = global.Promise; // X
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
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

export default dbConnection;
