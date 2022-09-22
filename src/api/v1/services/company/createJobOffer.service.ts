import { PrismaClient } from "@prisma/client";
import { JobOfferType } from "../../Schemas/company/joboffer.schema";
const prisma = new PrismaClient();

export async function createJobOfferService(jobOffer: JobOfferType) {
    
    try{
        return await prisma.joboffer.create({
            data: {
                name: jobOffer.name,
                description: jobOffer.description,
                start_hour: jobOffer.start_hour,
                end_hour: jobOffer.end_hour,
                modality: jobOffer.modality,
                quotas: jobOffer.quotas,
                id_work_area: jobOffer.id_work_area,
                id_company: jobOffer.user.id,
            },
        });
    } catch (error) {
        console.log(error);
    }
}