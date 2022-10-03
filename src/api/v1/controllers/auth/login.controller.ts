import { Request, Response } from 'express';
import { UserLoginType } from '../../Schemas/auth/auth.schema';
import { loginServices } from '../../services/auth/login.services';
import { validatePassword } from '../../utils/auth/validatePassword';
import { generateToken } from '../../utils/auth/generateToken';
import bcrypt from 'bcrypt';


export default async function loginController({ body }: Request<unknown, unknown, UserLoginType>, res: Response) {
    try {
        loginServices(body).then(async user => {
            const hash = await bcrypt.hash(user?.password!, 10); // Temporal!! Porque las contraseñas no se guardan encriptadas y al hacer el compare no funciona
            if (await validatePassword(body.password, hash)) {
                const token = generateToken({ email: user?.email!, role: user?.rol.name_rol!, status: user?.status.name! });
                res.json({
                    user_email: user?.email,
                    user_role: user?.rol.name_rol,
                    user_status: user?.status.name,
                    token: token
                });
            } else {
                res.status(401).json({ message: "Incorrect password" })
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
}