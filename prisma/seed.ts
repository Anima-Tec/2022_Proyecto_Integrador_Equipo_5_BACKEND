import { workArea } from "./seeds/workArea";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    for (const workAreaItem of workArea) {
        await prisma.workarea.create({
            data: {
                name_work_area: workAreaItem.name_work_area,
            },
        });
    }
}
main()
    .catch((e) => {
        throw e;
    }
    )
    .finally(async () => {
        await prisma.$disconnect();
    }
);
