import { Router, Request, Response } from "express";
import { validateSchema } from "../../middlewares/schema/validateSchema.middleware";
import { LoginSchema } from "../../Schemas/auth/auth.schema";
import loginController  from "../../controllers/auth/login.controller";
import registerController from "../../controllers/auth/register.controller";

const authRoutes = Router();

authRoutes
    .post('/login', validateSchema(LoginSchema), loginController)
    .post('/register', registerController)

export {authRoutes}
