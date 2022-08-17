import { Application } from "express";
import { companyRoutes } from "./company/compay.routes";

export const makeRoutesApp = ( app: Application ) => {
    app.use('/api/v1/company', companyRoutes);
    // more routes
}