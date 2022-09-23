import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import CreateJobOfferController from "../../controllers/company/JobOffer/CreateJobOffer.controller";
import DeleteJobOfferController from "../../controllers/company/JobOffer/DeleteJobOffer.controller";
import EditJobOfferController from "../../controllers/company/JobOffer/EditJobOffer.controller";
import GetJobOfferController from "../../controllers/company/JobOffer/GetJobOffer.controller";
import GetJobOffersController from "../../controllers/company/JobOffer/GetJobOffers.controller";
const prisma = new PrismaClient();
const companyRoutes = Router();

companyRoutes.get('/', async (_,res) => {
    
   const companies= await  prisma.company.findMany();
    res.send(companies);
})
.get('/joboffer', GetJobOffersController)
.post('/joboffer', CreateJobOfferController)
.get('/joboffer/:id', GetJobOfferController )
.put('/joboffer/:id', EditJobOfferController )
.delete('/joboffer/:id', DeleteJobOfferController );

export {companyRoutes}
