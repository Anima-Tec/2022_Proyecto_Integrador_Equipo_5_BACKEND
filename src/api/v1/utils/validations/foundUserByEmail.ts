import { PrismaClient } from "@prisma/client";
import { UserByEmail } from "../../Schemas/users/user.schema";
const prisma = new PrismaClient();


export async function foundUserByEmail(email: UserByEmail) {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            include: {
                rol: true,
                status: true
            }
        });
        return user;
    } catch (error) {
        console.log(error);
    }   
}