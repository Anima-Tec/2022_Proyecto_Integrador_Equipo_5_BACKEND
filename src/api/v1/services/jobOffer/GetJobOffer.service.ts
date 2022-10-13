import { PrismaClient } from "@prisma/client";
import { getJobOffer } from "../data-access/JobOffer/getJobOffer.data-access";
const prisma = new PrismaClient();

interface JobOfferResponse {
    status: number;
    message?: string;
    jobOffer?: object;
}

export async function getJobOfferService(id_job_offer: number): Promise<JobOfferResponse> {
    try {
        const jobOffer = await getJobOffer(id_job_offer);

        if (!jobOffer) {
            return {
                status: 404,
                message: "No se ha encontrado la oferta de trabajo",
            }
        }

        return {
            status: 200,
            jobOffer: jobOffer!,
        };
    
    } catch (error: any) {
        return { status: 500, message: error.message };
    }    
}