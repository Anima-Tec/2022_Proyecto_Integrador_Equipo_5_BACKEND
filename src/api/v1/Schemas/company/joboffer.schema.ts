import { z } from "zod";

export const JobOfferSchema = z.object({
    body: z.object({
        id: z.number().nullable(),
        name: z.string(),
        description: z.string(),
        start_hour: z.string(),
        end_hour: z.string(),
        modality: z.string(),
        quotas : z.number(),
        id_work_area: z.number(),
        user: z.object({
            id: z.number()
            }),
    }),
});

export type JobOfferType = z.infer<typeof JobOfferSchema>["body"];