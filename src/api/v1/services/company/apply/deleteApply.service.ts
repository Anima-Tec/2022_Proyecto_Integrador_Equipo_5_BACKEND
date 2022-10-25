import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function deleteApplyService(id_student: number, ci_student: string , id_job_offer: number) {
    try{
       /*  return await prisma.apply.delete({
            where: {
                id_jod_offer_apply_id_student_apply_ci_student_apply: {
                    id_student_apply: id_student,
                    ci_student_apply: ci_student,
                    id_jod_offer_apply: id_job_offer,
                },
            },
        }); */
    } catch (error) {
        console.log(error);
    }
}