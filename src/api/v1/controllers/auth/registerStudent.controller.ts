import { Request, Response } from 'express';
import { StudentRegisterType } from '../../Schemas/auth/auth.schema';
import { registerStudentService } from '../../services/auth/registerStudent.service';

export default async function registerStudentController({ body }: Request<unknown, unknown, StudentRegisterType>, res: Response) {
   try {
    const { status, message } = await registerStudentService(body); 
    res.status(status).json({ message: message });
   } catch (error) {
     res.status(500).json(error);
   }
};
