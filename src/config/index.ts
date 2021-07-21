import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    APP_NAME: process.env.APP_NAME || 'PicoPlacaApp',
}