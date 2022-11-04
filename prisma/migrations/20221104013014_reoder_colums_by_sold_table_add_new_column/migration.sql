/*
  Warnings:

  - Added the required column `new` to the `sold` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sold` ADD COLUMN `new` BOOLEAN NOT NULL;
