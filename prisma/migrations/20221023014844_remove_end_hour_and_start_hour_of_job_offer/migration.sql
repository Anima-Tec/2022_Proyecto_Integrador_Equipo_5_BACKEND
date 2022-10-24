/*
  Warnings:

  - You are about to drop the column `end_hour` on the `joboffer` table. All the data in the column will be lost.
  - You are about to drop the column `start_hour` on the `joboffer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `joboffer` DROP COLUMN `end_hour`,
    DROP COLUMN `start_hour`;
