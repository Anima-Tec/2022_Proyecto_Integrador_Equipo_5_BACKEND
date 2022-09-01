import express, { urlencoded } from 'express';
import cors from 'cors';
import makeRoutesApp  from './api/v1/routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(cors());
// add morgan, helmet...

makeRoutesApp(app);



export default app;