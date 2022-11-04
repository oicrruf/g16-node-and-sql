/*
  Warnings:

  - Added the required column `out` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` ADD COLUMN `out` BOOLEAN NOT NULL;
