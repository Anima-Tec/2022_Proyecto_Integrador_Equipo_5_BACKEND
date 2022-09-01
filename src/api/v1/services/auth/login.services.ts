import { UserLoginType } from "../../Schemas/auth/auth.schema";
import { foundUserByEmail } from "../../utils/validations/foundUserByEmail";

export async function loginServices(user: UserLoginType) {
   return await foundUserByEmail(user.email);
}