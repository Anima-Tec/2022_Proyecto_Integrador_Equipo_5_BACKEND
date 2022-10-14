import { PrismaClient } from "@prisma/client";
import { deleteJobOffer } from "../data-access/JobOffer/deleteJobOffer.data-access";
import { getJobOffer } from "../data-access/JobOffer/getJobOffer.data-access";

interface JobOfferResponse {
    status: number;
    message: string;
    jobOffer?: object;
}

export async function deleteJobOfferService(id_job_offer: number, id_company: number): Promise<JobOfferResponse> {
    try {
        const jobOffer = await getJobOffer(id_job_offer);

        if (!jobOffer) {
            return {
                status: 404,
                message: "JobOffer not found",
            };
        }

        if (jobOffer.company.id_company !== id_company) {
            return {
                status: 403,
                message: "You don't have permission to delete this joboffer",
            };
        }
        
        await deleteJobOffer(id_job_offer);
        
        return {
            status: 200,
            message: "JobOffer deleted",
            jobOffer: jobOffer
        };

    } catch (error) {
        return {
            status: 500,
            message: "Ha un ocurrido un error en el servidor" + error
        }
    }
}
