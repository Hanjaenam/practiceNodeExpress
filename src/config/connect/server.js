import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import flash from 'connect-flash';
import expressSession from 'express-session';
import routes from 'routers/routes';
import { rootRouter, authRouter, userRouter } from 'routers';
import localsMiddleware from 'middlewares/locals';

dotenv.config();

const app = express();
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', process.env.VIEWS_PATH);
// url 경로 localhost:8000/static으로 들어가면 static에 있는 파일을 사용할 수 있습니다.
app.use('/dist', express.static(process.env.DIST_PATH));
// cookie를 내가 설정하거나, 사용하려면 미들웨어를 사용
app.use(cookieParser());
// session은 cookie를 기본으로 하여 기능을 확장한 것.
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET_KEY, // 쿠키에 저장할 connect.sid값을 암호화할 키값 입력
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

app.use(routes.home, rootRouter);
app.use(routes.auth, authRouter);
app.use(routes.user, userRouter);

export default app;
