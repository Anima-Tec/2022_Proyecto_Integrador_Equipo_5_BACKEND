
import { Router } from "express";
import CreateJobOfferController from "../../controllers/JobOffer/CreateJobOffer.controller";
import DeleteJobOfferController from "../../controllers/JobOffer/DeleteJobOffer.controller";
import GetJobOfferController from "../../controllers/JobOffer/GetJobOffer.controller";
import GetJobOffersController from "../../controllers/JobOffer/GetJobOffers.controller";
const jobOfferRoutes = Router();



jobOfferRoutes
    .get('/', GetJobOffersController) // 
    .post('/', CreateJobOfferController) //
    .get('/:id', GetJobOfferController) //
    /*
    .put('/joboffer/:id', EditJobOfferController ) */
    .delete('/:id', DeleteJobOfferController)



export { jobOfferRoutes }

// middle que valide el rol de empresa
