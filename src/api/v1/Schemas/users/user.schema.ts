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




export type UserById = z.infer<typeof UserSchema>["body"]['id'];
export type UserByEmail = z.infer<typeof UserSchema>["body"]['email'];