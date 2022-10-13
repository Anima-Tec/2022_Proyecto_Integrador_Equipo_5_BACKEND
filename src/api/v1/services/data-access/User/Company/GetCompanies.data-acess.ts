import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCompanies() {
    try {
        return await prisma.company.findMany({
            include: {
                work_companyTowork_id_company_work: {
                    include: {
                        workarea: true,
                    }
                },
            }
        });
    } catch (error) {
        console.log(error);
    }
}