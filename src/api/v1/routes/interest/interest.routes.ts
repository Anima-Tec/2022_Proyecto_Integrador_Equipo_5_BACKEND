import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import getCompaniesInterestController from "../../controllers/student/interest/getCompaniesInterest.controller";
import getJobOffersInterestController from "../../controllers/student/interest/getJobOffersInterest.controller";
const interestRoutes = Router();

interestRoutes
    .get("/jobOffer", getJobOffersInterestController)
    .get("/jobOffer/:id", getJobOffersInterestController)
    .get("/company", getCompaniesInterestController);

export { interestRoutes }