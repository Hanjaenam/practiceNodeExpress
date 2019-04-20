import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import flash from 'connect-flash';
import expressSession from 'express-session';
import path from 'path';
import routes from 'routers/routes';
import { homeRouter, authRouter, userRouter } from 'routers';
import localsMiddleware from 'middlewares';

dotenv.config();

const app = express();
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', 'views'));
// url 경로 localhost:8000/static으로 들어가면 static에 있는 파일을 사용할 수 있습니다.
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use(cookieParser());
app.use(
  expressSession({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));

app.use(localsMiddleware);

app.use(routes.home, homeRouter);
app.use(routes.auth, authRouter);
app.use(routes.user, userRouter);

export default app;
