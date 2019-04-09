import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import homeRouter from 'routers/homeRouter';
import routes from './routes';

dotenv.config();

const app = express();
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../', 'views'));
app.use('/static', express.static(path.join(__dirname, '../', 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(routes.home, homeRouter);
export default app;
