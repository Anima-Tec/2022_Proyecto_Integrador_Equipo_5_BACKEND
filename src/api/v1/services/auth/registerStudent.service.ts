
import { StudentRegisterType } from "../../Schemas/auth/auth.schema";
import { findUserByEmail } from "../data-access/User/findUserByEmail.data-acces";
import { createStudent } from "../data-access/User/Student/createStudent.data-access";
import { findStudentByCI } from "../data-access/User/Student/findStudentByCI.data-access";

interface RegisterResponse {
  status: number;
  message?: string;
};

export async function registerStudentService(student: StudentRegisterType): Promise<RegisterResponse> {
  try {
    if( await findStudentByCI(student.ci) || await findUserByEmail(student.email) ) {
      return {
        status: 400,
        message: "Usuario ya existente"
      };
    } 
    await createStudent(student);
    return {
      status: 201,
      message: "Se ha registrado con exito"
    };
  } catch (error: any) {
    return { status: 500, message: error.message };
  }
}
