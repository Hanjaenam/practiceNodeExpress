import app from './config';

const { PORT = 4000 } = process.env;

const handleListen = () => {
  console.log(`SERVER IS RUNNING >> ${PORT}`);
};

app.listen(PORT, handleListen);
