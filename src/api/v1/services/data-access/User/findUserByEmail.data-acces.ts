import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function findUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
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
