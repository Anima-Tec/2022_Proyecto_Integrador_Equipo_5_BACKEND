import { Router, Request, Response } from "express";
import { validateSchema } from "../../middlewares/schema/validateSchema.middleware";
import { LoginSchema, RegisterStudentSchema } from "../../Schemas/auth/auth.schema";
import loginController  from "../../controllers/auth/login.controller";
import registerStudentController from "../../controllers/auth/registerStudent.controller";

const authRoutes = Router();

authRoutes
    .post('/login', validateSchema(LoginSchema), loginController)
    .post('/register', validateSchema(RegisterStudentSchema) , registerStudentController)


export {authRoutes}
