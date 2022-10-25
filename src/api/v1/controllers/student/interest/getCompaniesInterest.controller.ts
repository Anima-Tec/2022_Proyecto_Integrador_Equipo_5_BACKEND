import { Request, Response } from 'express';
import { getCompaniesInterestService } from '../../../services/student/interest/getCompaniesInterest.service';

export default async function getCompaniesInterestController({body}: Request, res: Response) {
    try {
        if (body.user.role == "Student") {
            const {status, message, companyInterest} = await getCompaniesInterestService(Number(body.user.id));
            res.status(status).json({message, companyInterest});
        } 
        return {
            status: 401,
            message: "Unauthorized",
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
