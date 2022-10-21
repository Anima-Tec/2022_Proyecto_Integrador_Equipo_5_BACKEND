import { Router, Request, Response } from "express";
import { validateSchema } from "../../middlewares/schema/validateSchema.middleware";
import { LoginSchema, RegisterStudentSchema } from "../../Schemas/auth/auth.schema";
import loginController  from "../../controllers/auth/login.controller";
import registerStudentController from "../../controllers/auth/registerStudent.controller";
import getCurrentUserController from "../../controllers/user/GetCurrentUser.controller";
import verifyToken from "../../middlewares/auth/verifyToken.middleware";

const authRoutes = Router();

authRoutes
    .post('/login', validateSchema(LoginSchema), loginController)
    .post('/register', validateSchema(RegisterStudentSchema) , registerStudentController)
    .get('/me', verifyToken , getCurrentUserController);


export {authRoutes}
