import { PrismaClient, User } from "@prisma/client";
import { UserByEmail, UserById } from "../../Schemas/users/user.schema";
const prisma = new PrismaClient();


export async function foundUserByEmail(email: UserByEmail) {
    if ( email ) {
        const userFound = await prisma.user.findFirst({
            where: {
                email
            },
            include: {
                rol: true
            }
        })
        return userFound;
    } else {
        throw new Error('User not found');
    }
}