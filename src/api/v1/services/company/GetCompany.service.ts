import { getCompany } from "../data-access/User/Company/GetCompany.data-acess";

interface ResponseCompanies {
    status: number;
    message?: string;
    company: any;
}

export async function GetCompanyService(id_company: number): Promise<ResponseCompanies> {
    try {
        const company = await getCompany(id_company);
        if (!company) {
            return {
                status: 404,
                message: 'No se han encontrado la compania',
                company: {}
            }
        }
        return {
            status: 200,
            company,
        };
    } catch (error) {
        return {
            status: 500,
            message: 'Error del servidor' + error,
            company: {},
        };
    }
}