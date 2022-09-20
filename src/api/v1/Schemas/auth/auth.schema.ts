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
        ci: z.number(),
        highschool_number: z.number(), // ...
        first_name: z.string(),
        last_name: z.string(),
        birth_date: z.string(),
       /*  newsletter: z.bigint(), // file */
        description: z.string(),
        phonenumber: z.string(),
    }),
});

export type UserLoginType = z.infer<typeof LoginSchema>["body"];
export type CompanyRegisterType = z.infer<typeof RegisterCompanySchema>["body"];
export type StudentRegisterType = z.infer<typeof RegisterStudentSchema>["body"];
