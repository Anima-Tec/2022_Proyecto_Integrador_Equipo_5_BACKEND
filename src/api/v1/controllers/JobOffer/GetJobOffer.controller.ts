import { Request, Response } from 'express';
import { getJobOfferService } from '../../services/jobOffer/GetJobOffer.service';

export default async function GetJobOfferController(req: Request, res: Response) {
    try {
        const {status,jobOffer,message} = await getJobOfferService(Number(req.params.id));
        res.status(status).json({jobOffer,message});
    } catch (error) {
        res.status(500).json(error);
    }
}

