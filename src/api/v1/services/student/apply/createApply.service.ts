import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createApplyService(id_student: number, ci_student: string , id_job_offer: number) {
    try{
        return await prisma.apply.create({
            data: {
                id_jod_offer_apply: id_job_offer,
                id_student_apply: id_student,
                ci_student_apply: ci_student,
            },
        });
    } catch (error) {
        console.log(error);
    }
}