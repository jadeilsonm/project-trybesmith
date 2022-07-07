import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/httpError.middlewares';
import router from './routers';

const app = express();

app.use(express.json());
app.use(router);
app.use(httpErrorMiddleware);

export default app;
