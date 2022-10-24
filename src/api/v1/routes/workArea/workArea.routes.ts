import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import GetWorkAreaController from "../../controllers/workArea/GetWorkArea.controller";
const prisma = new PrismaClient();
const workAreaRoutes = Router();

workAreaRoutes.get('/', GetWorkAreaController);

export { workAreaRoutes }