import { Request, Response } from 'express';
import { getJobOffersInterestService } from '../../../services/student/interest/getJobOffersInterest.service';

export default async function getJobOffersInterestController({body}: Request, res: Response) {
    try {
        if (body.user.role == "Student") {
            const {status, message, jobOfferInterest} = await getJobOffersInterestService(Number(body.user.id));
            res.status(status).json({message, jobOfferInterest});
        } 
        return {
            status: 401,
            message: "Unauthorized",
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
