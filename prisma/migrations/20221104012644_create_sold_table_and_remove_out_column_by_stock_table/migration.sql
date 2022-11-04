/*
  Warnings:

  - You are about to drop the column `out` on the `stock` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `stock` DROP COLUMN `out`;

-- CreateTable
CREATE TABLE `sold` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
