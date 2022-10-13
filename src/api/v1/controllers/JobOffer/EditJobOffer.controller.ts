import { Request, Response } from 'express';
import { editJobOfferService } from '../../services/jobOffer/EditJobOffer.service';

export default async function EditJobOfferController(req: Request, res: Response) {
    try {
        console.log("entre c");
        const jobOffer = await editJobOfferService(req.body, Number(req.params.id));
        res.status(200).json(jobOffer); 
    } catch (error) {
        res.status(500).json(error);
    }
}