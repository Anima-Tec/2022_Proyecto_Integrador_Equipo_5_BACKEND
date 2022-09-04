import { Request, Response } from 'express';
import { CompanyRegisterType } from '../../Schemas/auth/auth.schema';
import { registerCompanyService } from '../../services/auth/registerCompany.service';
import { foundUserByEmail } from '../../utils/validations/foundUserByEmail';

export default async function registerCompanyController({ body }: Request<unknown, unknown, CompanyRegisterType>, res: Response) {
    try {
        if (await foundUserByEmail(body.email)) {
            res.status(409).json({ message: "User already exist" })
        } else {
            res.status(201).json(await registerCompanyService(body));
        }
    } catch (error) {
        res.status(500).json(error);
    }
};