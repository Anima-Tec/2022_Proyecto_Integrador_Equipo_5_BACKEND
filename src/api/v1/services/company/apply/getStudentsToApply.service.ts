import { PrismaClient } from "@prisma/client";
import { type } from "os";
const prisma = new PrismaClient();

interface ApplyResponse {
    status: number;
    message?: string;
    apply?: object;
}

type IWorkArea = {
    name: string;
}
type IPhoneNumber = {
    phoneNumber: string;
}
interface IApply {
    id_student: number;
    firstName: string;
    lastName: string;
    highschool: string;
    birthdate: Date;
    workArea: IWorkArea[];
    email: string;
    description: string;
    phoneNumber: IPhoneNumber[];
}

/*
user
: 
{email: 'example@Studen214.com', description: 'example description for Student', phonenumber: Array(1)}
[[Prototype]]
: 
Object
*/

export async function getStudentsToApplyService(id_job_offer: number, id_company: number): Promise<ApplyResponse> {
    try {
        const applyFound = await prisma.apply.findMany({
            where: {
                id_job_offer_apply: id_job_offer,
            },
            include: {
                student_apply_id_student_applyTostudent: {
                    select: {
                        first_name: true,
                        last_name: true,
                        birth_date: true,
                        highschool: true,
                        interest_interest_id_student_interestTostudent: {
                            select: {
                                workarea: {
                                    select: {
                                        name_work_area: true,
                                    }
                                },
                            }
                        },
                        user: {
                            select: {
                                email: true,
                                description: true,
                                phonenumber: true,
                            }
                        }
                    }
                }
            }
        });
        const apply: IApply[] = [];
        applyFound.forEach((element: any) => {
            const workArea: IWorkArea[] = [];
            element.student_apply_id_student_applyTostudent.interest_interest_id_student_interestTostudent.forEach((element: any) => {
                workArea.push({
                    name: element.workarea.name_work_area,
                });
            });
            const phoneNumber: IPhoneNumber[] = [];
            element.student_apply_id_student_applyTostudent.user.phonenumber.forEach((element: any) => {
                phoneNumber.push({
                    phoneNumber: element.phone_number,
                });
            });
            apply.push({
                id_student: element.id_student_apply,
                firstName: element.student_apply_id_student_applyTostudent.first_name,
                lastName: element.student_apply_id_student_applyTostudent.last_name,
                highschool: element.student_apply_id_student_applyTostudent.highschool,
                birthdate: element.student_apply_id_student_applyTostudent.birth_date,
                workArea,
                email: element.student_apply_id_student_applyTostudent.user.email,
                description: element.student_apply_id_student_applyTostudent.user.description,
                phoneNumber,
            });
        });

        return {
            status: 200,
            apply,
        }
    } catch (error: any) {
        return { status: 500, message: error.message };
    }
}