import { PrismaClient } from "@prisma/client";
import { getJobOffer } from "../data-access/JobOffer/getJobOffer.data-access";
const prisma = new PrismaClient();

interface JobOfferResponse {
    status: number;
    message?: string;
    jobOffer?: object;
}

interface IJobOffer {
    id: number;
    name: string;
    description: string;
    modality: string;
    quotas: number;
    workArea: string;
}
export async function getJobOfferService(id_job_offer: number): Promise<JobOfferResponse> {
    try {
        const jobOfferFound = await getJobOffer(id_job_offer);

        if (!jobOfferFound) {
            return {
                status: 404,
                message: "No se ha encontrado la oferta de trabajo",
            }
        }

        const jobOffer: IJobOffer = {
            id: jobOfferFound.id_job_offer,
            name: jobOfferFound.name,
            description: jobOfferFound.description,
            modality: jobOfferFound.modality,
            quotas: jobOfferFound.quotas,
            workArea: jobOfferFound.workarea.name_work_area,
        }

        return {
            status: 200,
            jobOffer,
        };

    } catch (error: any) {
        return { status: 500, message: error.message };
    }
}