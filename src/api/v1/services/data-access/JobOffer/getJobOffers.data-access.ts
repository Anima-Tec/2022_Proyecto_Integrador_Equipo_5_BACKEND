import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getJobOffersCompany(id_company: number) {
    try {
        return await prisma.joboffer.findMany({
            where: {
                id_company: id_company,
            },
            select: {
                id_job_offer: true,
                name: true,
                description: true,
                modality: true,
                quotas: true,
                id_work_area: false,
                workarea: {
                    select: {
                        id_work_area: false,
                        name_work_area: true,
                    },
                },
                id_company: false,
                company: true,
            },
        });
    } catch (error) {
        console.log(error);
    }
}

export async function getJobOffersStudent() {
    try {
        return await prisma.joboffer.findMany({
            select: {
                id_job_offer: true,
                name: true,
                description: true,
                modality: true,
                quotas: true,
                id_work_area: false,
                workarea: {
                    select: {
                        id_work_area: false,
                        name_work_area: true,
                    },
                },
                id_company: false,
                company: true,
            },
        });
    } catch (error) {
        console.log(error);
    }
}