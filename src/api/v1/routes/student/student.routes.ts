import { PrismaClient } from "@prisma/client";
import { Router } from "express";
const prisma = new PrismaClient();
const studentRoutes = Router();

studentRoutes.get('/', async (_, res) => {
    const students = await prisma.student.findMany();
    res.send(students);
})

export { studentRoutes }
