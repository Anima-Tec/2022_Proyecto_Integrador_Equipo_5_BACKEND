import { Router } from "express";

const companyRoutes = Router();

companyRoutes.get('/', (_,res) => {
    res.send('Get all Companies');
})

export {companyRoutes}
