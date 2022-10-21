import { Request, Response } from 'express';
import { getCurrentUserService } from '../../services/user/getCurrentUser.service';

export default async function getCurrentUserController({body}: Request, res: Response) {
    try {
        const {status, message, user }  = await getCurrentUserService(Number(body.user.id));
        res.status(status).json({message, user});
    } catch (error) {
        res.status(500).json(error);
    }
}
