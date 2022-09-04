import { PrismaClient } from "@prisma/client";
import { Router } from "express";
const prisma = new PrismaClient();
const companyRoutes = Router();

companyRoutes.get('/', async (_,res) => {
    
   const companies= await  prisma.company.findMany();
    res.send(companies);
})

export {companyRoutes}
