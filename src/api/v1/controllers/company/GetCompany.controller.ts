import { Request, Response } from 'express';
import { GetCompanyService } from '../../services/company/GetCompany.service';

export default async function GetCompanyController(req: Request, res: Response) {
    try {
        const { status, company, message } = await GetCompanyService(Number(req.params.id));
        res.status(status).json({ company, message });
    } catch (error) {
        res.status(500).json(error);
    }
}

