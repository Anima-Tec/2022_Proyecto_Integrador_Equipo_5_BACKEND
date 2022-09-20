import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function foundCompanyByRut(rut: string) {
    if ( rut) {
        return await prisma.company.findFirst({
            where: {
                rut: rut
            }
        })
    } else {
        throw new Error('Student not found');
    }
}