import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function foundStudentByCI(ci: number) {
    if ( ci ) {
        const userFound = await prisma.student.findFirst({
            where: {
                ci: ci
            }
        })
        return userFound;
    } else {
        throw new Error('Student not found');
    }
}