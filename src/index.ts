import { app } from './app';
import { config } from './config';

const { PORT, APP_NAME } = config;


app.listen(PORT, () => {
    console.log(`${APP_NAME} running on ${PORT}!`);
});