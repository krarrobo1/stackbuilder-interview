import express, { Application } from 'express';
import routes from './routes';
import { fallback } from './middlewares/errorhandler';

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use(fallback);
