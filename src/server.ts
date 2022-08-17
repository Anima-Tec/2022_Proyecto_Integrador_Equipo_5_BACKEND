import express from 'express';
import cors from 'cors';
import { makeRoutesApp } from './api/v1/routes';


const app = express();

app.use(express.json());
app.use(cors());

makeRoutesApp(app);



export default app;