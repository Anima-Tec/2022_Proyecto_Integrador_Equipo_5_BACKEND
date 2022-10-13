import { Request, Response } from 'express';
import { GetCompaniesService } from '../../services/company/GetCompanies.service';

export default async function GetCompaniesController(_req: Request, res: Response) {
    try {
        const { status, companies, message } = await GetCompaniesService();
        res.status(status).json({ companies, message });
    } catch (error) {
        res.status(500).json(error);
    }
}

