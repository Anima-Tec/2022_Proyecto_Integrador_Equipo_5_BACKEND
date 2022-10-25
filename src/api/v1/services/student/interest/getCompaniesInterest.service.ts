import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface CompanyInterestResponse {
    status: number;
    message?: string;
    companyInterest?: any;
}

interface ICompanyInterest {
    idCompany: any;
    nameCompany: any;
    employees: any;
    yearFoundation: any;
    nameWorkArea: any;
}
    
export async function getCompaniesInterestService(id_student: number): Promise<CompanyInterestResponse> {
    try {
        const CompanyInterestFound = await prisma.interest.findMany({
            where: {
                id_student_interest: id_student
            },
            include: {
                workarea: {
                    select: {
                        joboffer: {
                            select: {
                                company: {
                                    select: {
                                        id_company: true,
                                        name_company: true,
                                        employees: true,
                                        year_foundation: true,
                                        work_companyTowork_id_company_work: {
                                            select: {
                                                workarea: {
                                                    select: {
                                                        name_work_area: true,
                                                    }
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        }
                    }
                },
            }
        });

        const companyInterest: ICompanyInterest[] = CompanyInterestFound.map((jobOffer) => {
            return {
                idCompany: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.company.id_company;
                }),
                nameCompany: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.company.name_company;
                }),
                employees: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.company.employees;
                }
                ),
                yearFoundation: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.company.year_foundation;
                }
                ),
                nameWorkArea: jobOffer.workarea.joboffer.find((jobOffer) => {
                    return jobOffer.company.work_companyTowork_id_company_work.find((work_companyTowork_id_company_work) => {
                        return work_companyTowork_id_company_work.workarea.name_work_area;
                    });
                }),
            }
        });

        return {
            status: 200,
            companyInterest,
        }
    } catch (error: any) {
        console.log(error);
        return { status: 500, message: error.message };
    }
}