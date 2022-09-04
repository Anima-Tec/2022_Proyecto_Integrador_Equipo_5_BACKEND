
import { PrismaClient } from "@prisma/client"
import { CompanyRegisterType } from "../../Schemas/auth/auth.schema";
const prisma = new PrismaClient();

export async function registerCompanyService(company: CompanyRegisterType) {
  const response = await prisma.company.create({
    data: {
      RUT: company.RUT,
      name: company.name,
      dir_number: company.dir_number,
      dir_street: company.dir_street,
      employees: company.employees,
      user: {
        create: {
          email: company.email,
          password: company.password,
          description: company.description,
          rol: {
            connect: { id: 1 }
          },
          phonenumber: {
            create: {
              phoneNumber: company.phonenumber
            }
          }
        }
      },
      validate: company.validate, //archivo
      yearFundation: company.yearFundation
    }
  })
  return response;
}
