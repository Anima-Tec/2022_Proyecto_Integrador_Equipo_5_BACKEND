import { getJobOffers } from "../data-access/JobOffer/getJobOffers.data-access";

interface JobOfferResponse {
    status: number;
    message?: string;
    jobOffers?: object;
}

export async function getJobOffersService(): Promise<JobOfferResponse> {
    try {
        const jobOffers = await getJobOffers();
        console.log(jobOffers);
        
        if (!jobOffers) {
            return {
                status: 404,
                message: "No se han encontrado ofertas de trabajo",
            };
        }

        return {
            status: 200,
            jobOffers,
        };

    } catch (error: any) {
        return { status: 500, message: error.message };
    }
}