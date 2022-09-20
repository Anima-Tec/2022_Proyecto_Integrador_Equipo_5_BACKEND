
import { PrismaClient } from "@prisma/client"
import { CompanyRegisterType } from "../../Schemas/auth/auth.schema";
const prisma = new PrismaClient();

export async function registerCompanyService(company: CompanyRegisterType) { 
  try {
    return await prisma.user.create({
      data: {
        email: company.email,
        password: company.password,
        description: company.description,
        rol: {
          connect: {
            id_rol: 2
          }
        },
        status: {
          connect: {
            id_status: 1
          }
        },
        company: {
          create: {
            rut: company.rut,
            name_company: company.name_company,
            employees: company.employees,
            dir_number: company.dir_number,
            dir_street: company.dir_street,
            year_foundation: new Date(company.year_foundation).toISOString(),
          }
        },
        phonenumber: {
          create: {
            phone_number: company.phone_number,
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}
