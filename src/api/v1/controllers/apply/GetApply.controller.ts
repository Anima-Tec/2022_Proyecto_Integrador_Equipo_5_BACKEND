import { Request, Response } from 'express';
import { getStudentsToApplyService } from '../../services/company/apply/getStudentsToApply.service';
import { getJobOffersToApply } from '../../services/student/apply/getJobOffersToApply.service';

export default async function GetApplyController({body, params}: Request, res: Response) {
    try {
        if (body.user.role == "Company") {
            const {status, message, apply} = await getStudentsToApplyService(Number(params.id), body.user.id);
            res.status(status).json({message, apply});
        }
        if (body.user.role == "Student") {
            const {status, message, apply} = await getJobOffersToApply(Number(body.user.id));
            res.status(status).json({message, apply});
        } 
    } catch (error) {
        res.status(500).json(error);
    }
}
