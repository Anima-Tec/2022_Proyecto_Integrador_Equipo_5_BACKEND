/*
  Warnings:

  - The primary key for the `apply` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_jod_offer_apply` on the `apply` table. All the data in the column will be lost.
  - Added the required column `id_job_offer_apply` to the `apply` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `apply` DROP FOREIGN KEY `apply_ibfk_1`;

-- AlterTable
ALTER TABLE `apply` DROP PRIMARY KEY,
    DROP COLUMN `id_jod_offer_apply`,
    ADD COLUMN `id_job_offer_apply` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_job_offer_apply`, `id_student_apply`, `ci_student_apply`);

-- AddForeignKey
ALTER TABLE `apply` ADD CONSTRAINT `apply_ibfk_1` FOREIGN KEY (`id_job_offer_apply`) REFERENCES `joboffer`(`id_job_offer`) ON DELETE RESTRICT ON UPDATE RESTRICT;
