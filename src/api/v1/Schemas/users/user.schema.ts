import { z } from "zod";

export const UserSchema = z.object({
    body: z.object({
        id: z.number(),
        email: z.string().email({message: "email is not valid"}),
        description: z.string(),
        phone_number: z.string(),
        password: z.string().min(6, 'password too short').max(20),
    }),
});

export const CompanySchema = UserSchema.extend({
    body: z.object({
        rut: z.string(),
        name_company: z.string(),
        employees: z.number(),
        dir_street: z.string(),
        dir_number: z.number(),
        year_foundation: z.string()
    }),
});

export const StudentSchema = UserSchema.extend({
    body: z.object({
        ci: z.string()/* .min(8, 'ci too short').max(8) */,
        first_name: z.string(),
        second_name: z.string(),
        last_name: z.string(),
        second_surname: z.string(),
        birth_date: z.string(),
        highschool: z.string(),
    }),
});

export type CompanyType = z.infer<typeof CompanySchema>["body"];
export type StudentType = z.infer<typeof StudentSchema>["body"];

export type UserById = z.infer<typeof UserSchema>["body"]['id'];
export type UserByEmail = z.infer<typeof UserSchema>["body"]['email'];