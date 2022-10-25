import { Application } from "express";
import verifyToken from "../middlewares/auth/verifyToken.middleware";
import { applyRoutes } from "./apply/apply.routes";
import { authRoutes } from "./auth/auth.routes";
import { companyRoutes } from "./company/company.routes";
import { jobOfferRoutes } from "./jobOffer/jobOffer.routes";
import { workAreaRoutes } from "./workArea/workArea.routes";
import { interestRoutes } from "./interest/interest.routes";
export default function makeRoutesApp ( app: Application ) {
    app.use('/api/v1/company', companyRoutes);
    app.use('/api/v1/joboffer', verifyToken , jobOfferRoutes);
    app.use('/api/v1/workarea', verifyToken , workAreaRoutes);
    app.use('/api/v1/apply', verifyToken , applyRoutes);
    app.use('/api/v1/interest', verifyToken , interestRoutes);
    app.use('/api/v1', authRoutes);
}