import { Application } from "express";
import verifyToken from "../middlewares/auth/verifyToken.middleware";
import { authRoutes } from "./auth/auth.routes";
import { companyRoutes } from "./company/company.routes";
import { jobOfferRoutes } from "./jobOffer/jobOffer.routes";
import { workAreaRoutes } from "./workArea/workArea.routes";
/* import { studentRoutes } from "./student/student.routes";
 */
export default function makeRoutesApp ( app: Application ) {
    app.use('/api/v1/company', companyRoutes);
    app.use('/api/v1/joboffer', verifyToken , jobOfferRoutes);
    app.use('/api/v1/workarea', verifyToken , workAreaRoutes);
/*     app.use('/api/v1/student', verifyToken, studentRoutes)
 */    app.use('/api/v1', authRoutes);
    // routes
}