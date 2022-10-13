import { PrismaClient } from "@prisma/client";
import { JobOfferType } from "../../Schemas/company/joboffer.schema";
import { createJobOffer } from "../data-access/JobOffer/createJobOffer.data-access";

interface JobOfferResponse {
    status: number;
    message: string;
    joboffer?: object;
}

export async function createJobOfferService(jobOffer: JobOfferType): Promise<JobOfferResponse> {
    try {
        const jobOfferCreated = await createJobOffer(jobOffer);

        if (!jobOfferCreated) {
            return {
                status: 500,
                message: "Error creating joboffer",
            };
        }

        return {
            status: 200,
            message: "JobOffer created successfully",
            joboffer: jobOfferCreated!,
        };
        
    } catch (error: any) {
        return { status: 500, message: error.message };
    }
}
