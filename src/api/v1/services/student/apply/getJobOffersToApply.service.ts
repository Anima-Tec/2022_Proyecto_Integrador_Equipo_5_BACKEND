import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface ApplyResponse {
    status: number;
    message?: string;
    apply?: any;
}

interface IApply {
    idStudent: number;
    idJobOffer: number;
    nameJobOffer: string;
    description: string;
    modality: string;
    workArea: string;
    quotas: number;
    nameCompany: string;
}

export async function getJobOffersToApply(id_student_apply: number): Promise<ApplyResponse> {
    try{
        const applyFound = await prisma.apply.findMany({
            where: {
                id_student_apply
            },
            include: {
                joboffer: {
                    select: {
                        id_job_offer: true,
                        name: true,
                        description: true,
                        modality: true,
                        quotas: true,
                        company: {
                            select: {
                                name_company: true,
                            }
                        },
                        workarea: {
                            select: {
                                name_work_area: true,
                            }
                        }                              
                    }
                }
            }
        });

        const apply: IApply[] = applyFound.map((apply) => {
            return {
                idStudent: apply.id_student_apply,
                idJobOffer: apply.joboffer.id_job_offer,
                nameJobOffer: apply.joboffer.name,
                description: apply.joboffer.description,
                modality: apply.joboffer.modality,
                workArea: apply.joboffer.workarea.name_work_area,
                quotas: apply.joboffer.quotas,
                nameCompany: apply.joboffer.company.name_company,
            }
        });

        if (apply.length === 0) {
            return {
                status: 404,
                apply: null,
            }
        }
        
        return {
            status: 200,
            apply,
        }

    } catch (error: any) {
        console.log(error);
        return { status: 500, message: error.message };
    }
}