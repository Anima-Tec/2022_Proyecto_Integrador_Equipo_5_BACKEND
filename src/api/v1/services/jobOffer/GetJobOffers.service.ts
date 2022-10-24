import { getJobOffersCompany } from "../data-access/JobOffer/getJobOffers.data-access";

interface JobOfferResponse {
    status: number;
    message?: string;
    jobOffers?: object;
}
interface IWorkArea {
    nameWorkArea: string;
}
interface JobOffersDTO {
    id: number,
    name: string,
    description: string,
    modality: string,
    quotas: number,
    workArea: IWorkArea,
}

export async function getJobOffersCompanyService(id_company: number): Promise<JobOfferResponse> {
    try {
        const jobOffersFound = await getJobOffersCompany(id_company);
        
        if (!jobOffersFound) {
            return {
                status: 404,
                message: "No se han encontrado ofertas de trabajo",
            };
        }

        const jobOffers: JobOffersDTO[] = jobOffersFound.map((jobOffer: any) => {

            const workArea: IWorkArea = {
                nameWorkArea: jobOffer.workarea.name_work_area,
            };

            const jobOfferDTO: JobOffersDTO = {
                id: jobOffer.id_job_offer,
                name: jobOffer.name,
                description: jobOffer.description,
                modality: jobOffer.modality,
                quotas: jobOffer.quotas,
                workArea: workArea,
            };

            return jobOfferDTO;
        });

        return {
            status: 200,
            jobOffers,
        };

    } catch (error: any) {
        return { status: 500, message: error.message };
    }
}