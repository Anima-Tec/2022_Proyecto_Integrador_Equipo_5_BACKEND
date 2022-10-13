import { PrismaClient } from "@prisma/client";
import { getCompanies } from "../data-access/User/Company/GetCompanies.data-acess";
const prisma = new PrismaClient();

interface ResponseCompanies {
    status: number;
    message?: string;
    companies: any;
}

export async function GetCompaniesService(): Promise<ResponseCompanies> {
    try {
        const companies = await getCompanies();

        if (!companies) {
            return {
                status: 404,
                message: 'No se han encontrado companias',
                companies: []
            }
        }

        return {
            status: 200,
            companies,
        };

    } catch (error) {
        return {
            status: 500,
            message: 'Error del servidor' + error,
            companies: [],
        };
    }
}