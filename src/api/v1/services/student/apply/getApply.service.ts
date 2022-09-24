import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getApplyService(id_student: number) {
    try{
        return await prisma.apply.findMany({
            where: {
                id_student_apply: id_student,
            },
            include: {
                joboffer: true,
            },
        });
    } catch (error) {
        console.log(error);
    }
}