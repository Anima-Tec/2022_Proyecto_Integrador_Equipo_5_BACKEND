import { Application } from "express";
import { companyRoutes } from "./company";

export const makeAppRoutes = ( app: Application ) => {
    app.use('/api/v1/company', companyRoutes);
    // more routes
}