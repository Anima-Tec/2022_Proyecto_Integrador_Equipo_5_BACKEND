import { Router } from "express";
import GetCompaniesController from "../../controllers/company/GetCompanies.controller";
import GetCompanyController from "../../controllers/company/GetCompany.controller";
const companyRoutes = Router();

companyRoutes
    .get('/', GetCompaniesController)
    .get('/:id', GetCompanyController);



export {companyRoutes}
