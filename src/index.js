import App from './app.js';
import dotenv from 'dotenv'

dotenv.config()

new App().start().then(() => console.log('App started'))