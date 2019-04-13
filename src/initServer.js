import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import homeRouter from 'routers/homeRouter';
import routes from './routers/routes';
import './utils/connectDB';
import { localsMiddleware } from './utils/middlewares';

dotenv.config();

const app = express();
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// url 경로 localhost:8000/static으로 들어가면 dist에 있는 파일을 사용할 수 있습니다.
app.use('/static', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(localsMiddleware);

app.use(routes.home, homeRouter);
export default app;
