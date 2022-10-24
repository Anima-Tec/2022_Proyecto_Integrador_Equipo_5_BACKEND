import { Request, Response } from 'express';
import { getJobOffersCompanyService } from '../../services/jobOffer/GetJobOffers.service';

export default async function GetJobOffersController({ body }: Request, res: Response) {
    const { user } = body;
    try {
        if (user.role === 'Company') {
            const { status, message, jobOffers } = await getJobOffersCompanyService(user.id);
            res.status(status).json({ message, jobOffers });
        }

        if (user.role === 'Student') {
            res.status(200).json({ message: 'Estudiante' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
