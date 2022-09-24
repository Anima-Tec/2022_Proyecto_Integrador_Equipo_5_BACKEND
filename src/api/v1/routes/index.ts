import { Application } from "express";
import verifyToken from "../middlewares/auth/verifyToken.middleware";
// import { verifyToken } from "../middlewares/auth/verifyToken";
import { authRoutes } from "./auth/auth.routes";
import { companyRoutes } from "./company/compay.routes";
import { studentRoutes } from "./student/student.routes";

export default function makeRoutesApp ( app: Application ) {
    app.use('/api/v1/company', verifyToken , companyRoutes);
    app.use('/api/v1/student', verifyToken, studentRoutes)
    app.use('/api/v1', authRoutes);
    // routes
}