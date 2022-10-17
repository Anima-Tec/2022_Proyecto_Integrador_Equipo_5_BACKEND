import { Request, Response } from 'express';
import { deleteJobOfferService } from '../../services/jobOffer/DeleteJobOffer.service';

export default async function DeleteJobOfferController({params, body}: Request, res: Response) {
    try {
        const { status, message, jobOffer } = await deleteJobOfferService(Number(params.id), body.user.id);
        res.status(status).json({message, jobOffer});
    } catch (error) {
        res.status(500).json(error);
    }
}