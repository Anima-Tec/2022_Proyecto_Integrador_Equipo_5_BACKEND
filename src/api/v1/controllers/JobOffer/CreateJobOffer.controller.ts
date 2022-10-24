import { Request, Response } from 'express';
import { createJobOfferService } from '../../services/jobOffer/CreateJobOffer.service';

export default async function CreateJobOfferController({body}: Request, res: Response) {
    try {
        console.log(body);
        
        const joboffer = await createJobOfferService(body);
        res.status(200).json(joboffer);
    } catch (error) {
        res.status(500).json(error);
    }
}
