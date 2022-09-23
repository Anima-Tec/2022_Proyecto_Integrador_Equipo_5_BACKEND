import { Request, Response } from 'express';
import { createJobOfferService } from '../../../services/company/JobOffer/CreateJobOffer.service';

export default async function CreateJobOfferController(req: Request, res: Response) {
    try {
        const joboffer = await createJobOfferService(req.body);
        res.status(200).json(joboffer);
    } catch (error) {
        res.status(500).json(error);
    }
}
