import { z } from "zod";

export const LoginSchema = z.object({
    body: z.object({
        email: z.string().email({message: "email is not valid"}),
        password: z.string().min(6, {message: 'password too short'}).max(20),
    }),
});

export const RegisterCompanySchema = z.object({
    body: z.object({
        email: z.string().email({message: "email is not valid"}),
        password: z.string().min(6, 'password too short').max(20),
        description: z.string(),
        rut: z.string(),
        name_company: z.string(),
        employees: z.number(), 
        dir_street: z.string(),
        dir_number: z.number(),
        phone_number: z.string(),
        year_foundation: z.string()
    }),
});

export const RegisterStudentSchema = z.object({
    body: z.object({
        email: z.string().email({message: "email is not valid"}),
        password: z.string().min(6, 'password too short').max(20),
        description: z.string().optional(),
        ci: z.string().min(8, 'ci too short').max(8),
        first_name: z.string(),
        second_name: z.string().optional(),
        last_name: z.string(),
        second_surname: z.string().optional(),
        birth_date: z.string(),
        highschool: z.string().optional(),
        phone_number: z.string()
    }),
});

export type UserLoginType = z.infer<typeof LoginSchema>["body"];
export type CompanyRegisterType = z.infer<typeof RegisterCompanySchema>["body"];
export type StudentRegisterType = z.infer<typeof RegisterStudentSchema>["body"];


