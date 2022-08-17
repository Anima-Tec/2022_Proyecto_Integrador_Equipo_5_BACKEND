import express from 'express';
import cors from 'cors';
import Companyroute from './api/v1/routes/company';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/company', Companyroute)



export default app;