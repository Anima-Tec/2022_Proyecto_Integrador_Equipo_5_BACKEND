import { findUserById } from "../data-access/User/findUserById.data-acces";

interface CurrentUserResponse {
  status: number;
  message?: string;
  user?: CompanyDTO | StudentDTO | AdminDTO;
}
interface AdminDTO {
  id: number;
  email: string;
  role: string;
}
type phoneNumber = {
  phone_number: string;
}
interface CompanyDTO {
  id: number;
  rut: string;
  email: string;
  role: string;
  name: string;
  employees: number;
  dirStreet: string;
  dirNumber: number;
  yearFoundation: Date;
  phoneNumber: phoneNumber[];
}
interface StudentDTO {
  id: number;
  email: string;
  role: string;
  ci: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondSurname: string;
  birthDate: Date;
  highschool: string;
  phoneNumber: phoneNumber[];
}

export async function getCurrentUserService(id_user: number): Promise<CurrentUserResponse> {
  try {
    const userFound = await findUserById(id_user);
    console.log(userFound);
    
    if (userFound?.company) {
      const user: CompanyDTO = {
        id: userFound.id_user,
        rut: userFound.company.rut,
        email: userFound.email,
        role: userFound.rol.name_rol,
        name: userFound.company.name_company,
        employees: userFound.company.employees,
        dirStreet: userFound.company.dir_street,
        dirNumber: userFound.company.dir_number,
        yearFoundation: userFound.company.year_foundation,
        phoneNumber: userFound.phonenumber,
      }
      return {
        status: 200,
        user: user
      };
    }

    if (userFound?.student) {
      const user: StudentDTO = {
        id: userFound.id_user,
        email: userFound.email,
        role: userFound.rol.name_rol,
        ci: userFound.student.ci,
        firstName: userFound.student.first_name,
        secondName: userFound.student.second_name,
        lastName: userFound.student.last_name,
        secondSurname: userFound.student.second_surname,
        highschool: userFound.student.highschool,
        birthDate: userFound.student.birth_date,
        phoneNumber: userFound.phonenumber,
      }
      return {
        status: 200,
        user: user
      };
    }

    if (userFound) {
      const user: AdminDTO = {
        id: userFound.id_user,
        email: userFound.email,
        role: userFound.rol.name_rol,
      }
      return {
        status: 200,
        user: user
      };
    }

    return {
      status: 302,
      message: 'Vuelve a ingresar a la plataforma'
    };
  } catch (error: any) {
    return { status: 500, message: error.message };
  }
}
