import { Request, Response } from 'express';
import bcrypt, { hash } from 'bcrypt';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { loginServices } from '../../services/auth/login.services';
import jwt from 'jsonwebtoken';
import { UserLoginType } from '../../Schemas/auth/auth.schema';
import generateToken from '../../utils/auth/generateToken';


export default async function loginController(req: Request<unknown, unknown, UserLoginType>, res: Response) {
    try {
        loginServices(req.body).then( async user => {
            const hash = await bcrypt.hash(user?.password!, 10); // Temporal!! Porque las contraseñas no se guardan encriptadas y al hacer el compare no funciona
            if (await bcrypt.compare(req.body.password, hash!)) {
                const token = generateToken({ id: user?.id, role: user?.rol.nameRol});
                res.json({
                    user_id: user?.id,
                    user_role: user?.rol.nameRol,
                    token: token
                });
            }else{
                res.status(401).json({ msg: "Incorrect password" })
            }
        });
    } catch (error) {
        res.status(500).json(getErrorMessage(error));
    }
}