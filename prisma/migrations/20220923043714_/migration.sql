-- DropForeignKey
ALTER TABLE `apply` DROP FOREIGN KEY `apply_ibfk_1`;

-- AddForeignKey
ALTER TABLE `apply` ADD CONSTRAINT `apply_ibfk_1` FOREIGN KEY (`id_jod_offer_apply`) REFERENCES `joboffer`(`id_job_offer`) ON DELETE CASCADE ON UPDATE RESTRICT;
