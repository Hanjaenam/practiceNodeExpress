import app from './config/server';

const { PORT = 4000 } = process.env;

const handleListen = () => {
  console.log(`SERVER IS RUNNING >> ${PORT}`);
};

app.listen(PORT, handleListen);
