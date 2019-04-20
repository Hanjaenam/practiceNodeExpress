import app from './config/server';
import 'config/connectDB';
import 'config/passport/local';

const { PORT = 4000 } = process.env;

const handleListen = () => {
  console.log(`SERVER IS RUNNING >> ${PORT}`);
};

app.listen(PORT, handleListen);
