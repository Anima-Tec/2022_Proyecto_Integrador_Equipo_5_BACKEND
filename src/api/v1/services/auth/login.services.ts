
import { UserLoginType } from "../../Schemas/auth/auth.schema";
import { findUserByEmail } from "../data-access/User/findUser.data-acces";
import { validatePassword } from '../../utils/auth/validatePassword';
import { generateToken } from '../../utils/auth/generateToken';
import bcrypt from 'bcrypt';

interface LoginResponse {
  status: number;
  token?: string;
  message?: string;
};

export async function loginServices(user: UserLoginType): Promise<LoginResponse> {
  try {
    const hash = await bcrypt.hash(user?.password!, 10); // Temporal!! Porque las contraseñas no se guardan encriptadas y al hacer el compare no funciona
    const userFound = await findUserByEmail(user.email);
    if (userFound) {
      if (await validatePassword(userFound.password, hash)) {
        const token = generateToken({ id: userFound?.id_user, email: userFound?.email!, role: userFound?.rol.name_rol!, status: userFound?.status.name! });
        return {
          status: 200,
          token: token
        };
      } else {
        return {
          status: 401,
          message: "Incorrect password"
        };
      }
    }
    return {
      status: 401,
      message: "User not found"
    };
  } catch (error: any) {
    return { status: 500, message: error.message };
  }
}
