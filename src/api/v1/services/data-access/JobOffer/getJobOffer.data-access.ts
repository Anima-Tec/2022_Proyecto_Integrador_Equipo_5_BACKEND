import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getJobOffer(id_job_offer: number) {
    try {
        return await prisma.joboffer.findUnique({
            where: {
                id_job_offer
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