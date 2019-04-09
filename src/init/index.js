import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.set('view engine');
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export const PORT = process.env.PORT ? process.env.PORT : 4000;
export default app;
