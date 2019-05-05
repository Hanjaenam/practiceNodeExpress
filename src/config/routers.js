import { rootRouter, authRouter, userRouter } from 'routers';
import routes from 'routers/routes';

export default app => {
  app.use(routes.home, rootRouter);
  app.use(routes.auth, authRouter);
  app.use(routes.user, userRouter);
};
