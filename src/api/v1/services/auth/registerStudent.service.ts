
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

// ver , si se registra el usuario ya mismo generar el token y que el front lo capture y lo ingrese. O Que lo redireccione al Login. - se agrega a la interfaz de respuesta el token y se agrega al return del servicio
// por el momento solo lo registra y no genera el token
// password confirmar que sea igual al password