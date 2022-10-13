import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import CreateApplyController from "../../controllers/student/apply/CreateApply.controller";
import DeleteApplyController from "../../controllers/student/apply/DeleteApply.controller";
import GetApplyController from "../../controllers/student/apply/GetApply.controller";
const prisma = new PrismaClient();
const studentRoutes = Router();
/* 
studentRoutes.get('/', async (_, res) => {
    const students = await prisma.student.findMany();
    res.send(students);
}).get('/apply', GetApplyController).post('/apply/:id', CreateApplyController).delete('/apply/:id', DeleteApplyController)

export { studentRoutes }
 */