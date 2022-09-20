import { Application } from "express";
// import { verifyToken } from "../middlewares/auth/verifyToken";
import { authRoutes } from "./auth/auth.routes";
import { companyRoutes } from "./company/compay.routes";

export default function makeRoutesApp ( app: Application ) {
   /*  app.use('/api/v1/company', verifyToken, companyRoutes); */
    app.use('/api/v1', authRoutes);
    // routes
}