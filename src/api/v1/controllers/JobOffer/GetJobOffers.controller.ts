import { Request, Response } from 'express';
import { getJobOffersService } from '../../services/jobOffer/GetJobOffers.service';

export default async function GetJobOffersController(req: Request, res: Response) {
    try {
        const {status,message,jobOffers} = await getJobOffersService();
        res.status(status).json({message,jobOffers});
    } catch (error) {
        res.status(500).json(error);
    }
}
