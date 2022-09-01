import { PrismaClient, User } from "@prisma/client";
import { UserById } from "../../Schemas/users/user.schema";
const prisma = new PrismaClient();


export async function foundUserById(id: UserById) {
    if ( id ) {
        const userFound = await prisma.user.findFirst({
            where: {
                id
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