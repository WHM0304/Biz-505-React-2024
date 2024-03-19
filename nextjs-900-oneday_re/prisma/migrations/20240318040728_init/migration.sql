-- CreateTable
CREATE TABLE `tbl_student` (
    `s_code` VARCHAR(191) NOT NULL,
    `s_name` VARCHAR(191) NOT NULL,
    `s_dept` VARCHAR(191) NOT NULL,
    `s_grade` VARCHAR(191) NOT NULL,
    `s_tel` VARCHAR(191) NULL,
    `s_addr` VARCHAR(191) NULL,

    PRIMARY KEY (`s_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_point` (
    `p_code` VARCHAR(191) NOT NULL,
    `p_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`p_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_stu_point` (
    `r_scode` VARCHAR(191) NOT NULL,
    `r_pcode` VARCHAR(191) NOT NULL,
    `r_pscore` INTEGER NOT NULL,

    PRIMARY KEY (`r_scode`, `r_pcode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
