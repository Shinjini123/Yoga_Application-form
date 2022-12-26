/*
  Warnings:

  - Added the required column `price` to the `Batch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `batch` ADD COLUMN `price` INTEGER NOT NULL;
