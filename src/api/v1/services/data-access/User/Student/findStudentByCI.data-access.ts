import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function findStudentByCI(ci: string) {
    try {
        const student = await prisma.student.findFirst({
            where: {
                ci: ci
            }
        })
        return student;
    } catch (error) {
        console.log(error);
    }
}
