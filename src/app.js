import app, { PORT } from './init';

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING... >> ${PORT}`);
});
