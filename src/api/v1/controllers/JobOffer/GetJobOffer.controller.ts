import { Request, Response } from 'express';
import { getJobOfferService } from '../../services/jobOffer/GetJobOffer.service';

export default async function GetJobOfferController(req: Request, res: Response) {
    try {
        const {status,message,jobOffer} = await getJobOfferService(Number(req.params.id));
        console.log(jobOffer);
        
        res.status(status).json({message, jobOffer});
    } catch (error) {
        res.status(500).json(error);
    }
}

