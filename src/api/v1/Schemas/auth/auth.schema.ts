import { z } from "zod";

export const LoginSchema = z.object({
    body: z.object({
        email: z.string().email({message: "email is not valid"}),
        password: z.string().min(6, 'password too short').max(20),
    }),
});

export const RegisterSchema = z.object({
    body: z.object({
        email: z.string().email({message: "email is not valid"}),
        password: z.string().min(6, 'password too short').max(20),
    }),
});

export type UserLoginType = z.infer<typeof LoginSchema>["body"];
export type UserRegisterType = z.infer<typeof RegisterSchema>["body"];
