import { Request, Response } from 'express';
import { UserLoginType } from '../../Schemas/auth/auth.schema';
import { loginServices } from '../../services/auth/login.services';


export default async function loginController({ body }: Request<unknown, unknown, UserLoginType>, res: Response) {
    try {
        const {status, token, message} = await loginServices(body);
        res.status(status).json({token: token, message: message});
    } catch (error) {
        res.status(500).json(error);
    }
}
