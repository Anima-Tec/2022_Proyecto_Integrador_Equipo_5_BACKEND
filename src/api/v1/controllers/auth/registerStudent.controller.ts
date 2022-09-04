import { Request, Response } from 'express';
import { StudentRegisterType } from '../../Schemas/auth/auth.schema';
import { registerStudentService } from '../../services/auth/registerStudent.service';
import { foundStudentByCI } from '../../utils/validations/foundStudentByCI';
import { foundUserByEmail } from '../../utils/validations/foundUserByEmail';

export default async function registerStudentController({ body }: Request<unknown, unknown, StudentRegisterType>, res: Response) {
    try {
        if (await foundUserByEmail(body.email) || await foundStudentByCI(body.ci)) {
            res.status(409).json({ message: "User already exist" })
        } else {
            res.status(201).json(await registerStudentService(body));
        }
    } catch (error) {
        res.status(500).json(error);
    }
};