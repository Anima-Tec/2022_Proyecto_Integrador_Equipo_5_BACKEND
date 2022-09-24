import { Request, Response } from 'express';
import { getApplyService } from '../../../services/student/apply/getApply.service';

export default async function GetApplyController(req: Request, res: Response) {
    try {
        const apply = await getApplyService(Number(req.body.user.id));
        res.status(200).json(apply);
    } catch (error) {
        res.status(500).json(error);
    }
}
