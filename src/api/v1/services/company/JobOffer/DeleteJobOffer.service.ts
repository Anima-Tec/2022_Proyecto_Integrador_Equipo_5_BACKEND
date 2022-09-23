import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function deleteJobOfferService(id: number) {
    try {
        return await prisma.joboffer.delete({
            where: {
                id_job_offer: id,
            },
        });

    } catch (error) {
        console.log(error); 
    }    
}