import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function deleteJobOffer(id_job_offer: number) {
    try {
        return await prisma.joboffer.delete({
            where: {
                id_job_offer,
            },
        });
    } catch (error) {
        console.log(error);
    }
}