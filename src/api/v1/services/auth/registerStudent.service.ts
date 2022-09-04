
import { PrismaClient } from "@prisma/client"
import { StudentRegisterType } from "../../Schemas/auth/auth.schema";
const prisma = new PrismaClient();

export async function registerStudentService(student: StudentRegisterType) {

  try {
    return await prisma.student.create({
      data: {
        ci: student.ci,
        highschool_number: student.highschool_number,
        id_status: 1, // conect table  status
        first_name: student.first_name,
        last_name: student.last_name,
        birth_date: null,
        newsletter: {
          create: {
            Average: 2,
          }
        },
        user: {
          create: {
            email: student.email,
            password: student.password,
            description: student.description,
            rol: {
              connect: { id: 1 }
            },
            phonenumber: {
              create: {
                phoneNumber: student.phonenumber
              }
            }
          }
        },
      }
    })
  } catch (error) {
    console.log(error);

  }
}
