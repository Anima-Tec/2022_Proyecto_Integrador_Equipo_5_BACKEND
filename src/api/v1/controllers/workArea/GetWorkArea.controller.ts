import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { number, string } from 'zod';
const prisma = new PrismaClient();

interface workArea {
    id: number,
    name: string,
}

interface WorkAreasType {
    workAreas: workArea[]
}

export default async function GetWorkAreaController(req: Request, res: Response) {
    try {
        const workAreasFound = await prisma.workarea.findMany();
        const {workAreas}: WorkAreasType = {
            workAreas: workAreasFound.map((workArea) => {
                return {
                    id: workArea.id_work_area,
                    name: workArea.name_work_area,
                };
            }),
        };
        res.status(200).json(workAreas);
    } catch (error) {
        res.status(500).json(error);
    }
}

