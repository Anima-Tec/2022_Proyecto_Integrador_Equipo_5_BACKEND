import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getStudentService(id_student: number) {
    try{
        return await prisma.user.findUnique({
            where: {
                id_user: id_student,
            },
            include: {
                student: true,
            },
        });
    } catch (error) {
        console.log(error);
    }
}