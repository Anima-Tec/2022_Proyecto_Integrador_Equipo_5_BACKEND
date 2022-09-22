import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import JobOfferController from "../../controllers/company/joboffer.controller";
const prisma = new PrismaClient();
const companyRoutes = Router();

companyRoutes.get('/', async (_,res) => {
    
   const companies= await  prisma.company.findMany();
    res.send(companies);
}).post('/joboffer', JobOfferController)

export {companyRoutes}
