import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface JobOfferInterestResponse {
    status: number;
    message?: string;
    jobOfferInterest?: any;
}

interface IJobOfferInterest {
    nameCompany: any;
    nameJobOffer: any;
    description: any;
    modality: any;
    quotas: any;
    nameWorkArea: any;
}

export async function getJobOffersInterestService(id_student_interest: number): Promise<JobOfferInterestResponse> {
    try {
        const jobOfferInterestFound = await prisma.interest.findMany({
            where: {
                id_student_interest
            },
            include: {
                workarea: {
                    include: {
                        joboffer: {
                            select: {
                                name: true,
                                description: true,
                                modality: true,
                                quotas: true,
                                workarea: {
                                    select: {
                                        name_work_area: true,
                                    }
                                },
                                company: {
                                    select: {
                                        name_company: true,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        const jobOfferInterest: IJobOfferInterest[] = jobOfferInterestFound.map((jobOffer) => {
            return {
               nameCompany: jobOffer.workarea.joboffer.find((jobOffer) => { 
                     return jobOffer.company.name_company
                }),
                description: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.description
                }
                ),
                modality: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.modality
                }
                ),
                quotas: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.quotas
                }
                ),
                nameWorkArea: jobOffer.workarea.name_work_area,
                nameJobOffer: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.name
                }
                ),
            }
        })
        
        return {
            status: 200,
            message: "Job Offers Interest found",
            jobOfferInterest
        }

    } catch (error: any) {
        console.log(error);
        return { status: 500, message: error.message };
    }
}