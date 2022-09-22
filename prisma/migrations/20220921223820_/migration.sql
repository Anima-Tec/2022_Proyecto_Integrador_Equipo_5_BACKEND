-- CreateTable
CREATE TABLE `apply` (
    `id_jod_offer_apply` INTEGER NOT NULL,
    `id_student_apply` INTEGER NOT NULL,
    `ci_student_apply` VARCHAR(10) NOT NULL,

    INDEX `ci_student_apply`(`ci_student_apply`),
    INDEX `id_student_apply`(`id_student_apply`),
    PRIMARY KEY (`id_jod_offer_apply`, `id_student_apply`, `ci_student_apply`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company` (
    `id_company` INTEGER NOT NULL,
    `rut` VARCHAR(10) NOT NULL,
    `name_company` VARCHAR(50) NOT NULL,
    `employees` INTEGER NOT NULL,
    `dir_street` VARCHAR(50) NOT NULL,
    `dir_number` INTEGER NOT NULL,
    `year_foundation` DATE NOT NULL,

    UNIQUE INDEX `company_id_company_key`(`id_company`),
    UNIQUE INDEX `rut`(`rut`),
    PRIMARY KEY (`id_company`, `rut`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `interest` (
    `id_student_interest` INTEGER NOT NULL,
    `ci_student_interest` VARCHAR(10) NOT NULL,
    `id_work_area_interest` INTEGER NOT NULL,

    INDEX `ci_student_interest`(`ci_student_interest`),
    INDEX `id_work_area_interest`(`id_work_area_interest`),
    PRIMARY KEY (`id_student_interest`, `ci_student_interest`, `id_work_area_interest`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `joboffer` (
    `id_job_offer` INTEGER NOT NULL AUTO_INCREMENT,
    `id_company` INTEGER NOT NULL,
    `id_work_area` INTEGER NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `start_hour` VARCHAR(191) NOT NULL,
    `end_hour` VARCHAR(191) NOT NULL,
    `modality` VARCHAR(50) NOT NULL,
    `quotas` INTEGER NOT NULL,

    UNIQUE INDEX `id_job_offer`(`id_job_offer`),
    INDEX `id_company`(`id_company`),
    INDEX `id_work_area`(`id_work_area`),
    PRIMARY KEY (`id_job_offer`, `id_company`, `id_work_area`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `newsletter` (
    `id_newsletter` INTEGER NOT NULL AUTO_INCREMENT,
    `average_score` INTEGER NOT NULL,
    `newsletter` BLOB NOT NULL,
    `id_student` INTEGER NOT NULL,

    INDEX `id_student`(`id_student`),
    PRIMARY KEY (`id_newsletter`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `phonenumber` (
    `id_user_phone_number` INTEGER NOT NULL,
    `phone_number` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id_user_phone_number`, `phone_number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rol` (
    `id_rol` INTEGER NOT NULL AUTO_INCREMENT,
    `name_rol` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `name_rol`(`name_rol`),
    PRIMARY KEY (`id_rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `id_status` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `id_student` INTEGER NOT NULL,
    `ci` VARCHAR(10) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `second_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `second_surname` VARCHAR(50) NOT NULL,
    `birth_date` DATE NOT NULL,
    `highschool` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `ci`(`ci`),
    PRIMARY KEY (`id_student`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(40) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `id_rol` INTEGER NOT NULL,
    `id_status` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    INDEX `id_rol`(`id_rol`),
    INDEX `id_status`(`id_status`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `work` (
    `id_company_work` INTEGER NOT NULL,
    `rut_comany_work` VARCHAR(10) NOT NULL,
    `id_work_area_work` INTEGER NOT NULL,

    INDEX `id_work_area_work`(`id_work_area_work`),
    INDEX `rut_comany_work`(`rut_comany_work`),
    PRIMARY KEY (`id_company_work`, `rut_comany_work`, `id_work_area_work`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workarea` (
    `id_work_area` INTEGER NOT NULL AUTO_INCREMENT,
    `name_work_area` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `name_work_area`(`name_work_area`),
    PRIMARY KEY (`id_work_area`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `apply` ADD CONSTRAINT `apply_ibfk_1` FOREIGN KEY (`id_jod_offer_apply`) REFERENCES `joboffer`(`id_job_offer`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `apply` ADD CONSTRAINT `apply_ibfk_2` FOREIGN KEY (`id_student_apply`) REFERENCES `student`(`id_student`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `apply` ADD CONSTRAINT `apply_ibfk_3` FOREIGN KEY (`ci_student_apply`) REFERENCES `student`(`ci`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `company` ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`id_company`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `interest` ADD CONSTRAINT `interest_ibfk_1` FOREIGN KEY (`id_student_interest`) REFERENCES `student`(`id_student`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `interest` ADD CONSTRAINT `interest_ibfk_2` FOREIGN KEY (`ci_student_interest`) REFERENCES `student`(`ci`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `interest` ADD CONSTRAINT `interest_ibfk_3` FOREIGN KEY (`id_work_area_interest`) REFERENCES `workarea`(`id_work_area`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `joboffer` ADD CONSTRAINT `joboffer_ibfk_1` FOREIGN KEY (`id_company`) REFERENCES `company`(`id_company`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `joboffer` ADD CONSTRAINT `joboffer_ibfk_2` FOREIGN KEY (`id_work_area`) REFERENCES `workarea`(`id_work_area`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `newsletter` ADD CONSTRAINT `newsletter_ibfk_1` FOREIGN KEY (`id_student`) REFERENCES `student`(`id_student`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `phonenumber` ADD CONSTRAINT `phonenumber_ibfk_1` FOREIGN KEY (`id_user_phone_number`) REFERENCES `user`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`id_student`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol`(`id_rol`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`id_status`) REFERENCES `status`(`id_status`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `work` ADD CONSTRAINT `work_ibfk_1` FOREIGN KEY (`id_company_work`) REFERENCES `company`(`id_company`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `work` ADD CONSTRAINT `work_ibfk_2` FOREIGN KEY (`rut_comany_work`) REFERENCES `company`(`rut`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `work` ADD CONSTRAINT `work_ibfk_3` FOREIGN KEY (`id_work_area_work`) REFERENCES `workarea`(`id_work_area`) ON DELETE RESTRICT ON UPDATE RESTRICT;
