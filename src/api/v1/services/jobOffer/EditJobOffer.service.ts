import { PrismaClient } from "@prisma/client";
import { JobOfferType } from "../../Schemas/company/joboffer.schema";
const prisma = new PrismaClient();

export async function editJobOfferService(jobOffer: JobOfferType, id: number) {
    try{

/*  PASAR CONTROLLER A ADMIN,
        const test=  await prisma.joboffer.update({
            where: {
                id_job_offer_id_company_id_work_area: {
                    id_job_offer: id,
                    id_company: jobOffer.user.id,
                    id_work_area: jobOffer.id_work_area,
                },
            },
            data: {
                name: jobOffer.name,
                description: jobOffer.description,
                start_hour: jobOffer.start_hour,
                end_hour: jobOffer.end_hour,
                modality: jobOffer.modality,
                quotas: jobOffer.quotas,
                id_work_area: jobOffer.id_work_area,
            },
        });
        console.log(test);
        return test; */
    } catch (error) {
        console.log(error);
    }
}