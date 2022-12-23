/*
  Warnings:

  - Added the required column `payment_amount` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payment` ADD COLUMN `payment_amount` INTEGER NOT NULL;
