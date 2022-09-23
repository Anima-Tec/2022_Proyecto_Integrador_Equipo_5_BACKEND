import { Request, Response } from 'express';
import { deleteJobOfferService } from '../../../services/company/JobOffer/DeleteJobOffer.service';

export default async function DeleteJobOfferController(req: Request, res: Response) {
    try {
        const joboffers = await deleteJobOfferService(Number(req.params.id));
        res.status(200).json(joboffers);
    } catch (error) {
        res.status(500).json(error);
    }
}