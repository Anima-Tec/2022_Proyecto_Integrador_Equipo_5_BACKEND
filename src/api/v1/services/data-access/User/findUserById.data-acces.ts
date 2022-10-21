import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function findUserById(id_user: number) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id_user
            },
            include: {
                phonenumber: true,
                student: true,
                company: true,
                rol: true,
                status: true,
            }
        });
        return user;
    } catch (error) {
        console.log(error);
    }
}
