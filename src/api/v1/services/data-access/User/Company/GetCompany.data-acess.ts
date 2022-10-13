import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCompany(id_company: number) {
    try {
        return await prisma.company.findUnique(
            {
                where: {
                    id_company
                },
                include: {
                    work_companyTowork_id_company_work: {
                        include: {
                            workarea: true,
                        }
                    },
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
}