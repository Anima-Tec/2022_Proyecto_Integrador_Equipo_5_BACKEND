import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getJobOfferService(id: number) {
    try {
        return await prisma.joboffer.findUnique({
            where: {
                id_job_offer: id,
            },
            include: {
                company: true,
                workarea: true,
            },
        });

    } catch (error) {
        console.log(error); 
    }    
}