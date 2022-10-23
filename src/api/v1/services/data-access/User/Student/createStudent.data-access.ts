import { PrismaClient } from "@prisma/client";
import { StudentRegisterType } from "../../../../Schemas/auth/auth.schema";
const prisma = new PrismaClient();

export async function createStudent(student: StudentRegisterType) {
    try {
        return await prisma.user.create({
            data: {
                email: student.email,
                password: student.password,
                description: student.description !== undefined ? student.description : "",
                rol: {
                    connect: {
                        id_rol: 1
                    }
                },
                status: {
                    connect: {
                        id_status: 1
                    }
                },
                student: {
                    create: {
                        ci: student.ci,
                        first_name: student.first_name,
                        second_name: student.second_name !== undefined ? student.second_name : "",
                        last_name: student.last_name,
                        second_surname: student.second_surname !== undefined ? student.second_surname : "",
                        birth_date: new Date(student.birth_date).toISOString(),
                        highschool: student.highschool !== undefined ? student.highschool : "",
                    }
                },
                phonenumber: {
                    create: {
                        phone_number: student.phone_number,
                    }
                }
            }
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
}
