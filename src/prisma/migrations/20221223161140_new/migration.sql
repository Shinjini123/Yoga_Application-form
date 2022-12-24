/*
  Warnings:

  - You are about to drop the column `batch_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `payment_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone_no` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `batch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_batch_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_payment_id_fkey`;

-- DropIndex
DROP INDEX `User_email_phone_no_idx` ON `user`;

-- DropIndex
DROP INDEX `User_phone_no_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `batch_id`,
    DROP COLUMN `payment_id`,
    DROP COLUMN `phone_no`;

-- DropTable
DROP TABLE `batch`;

-- DropTable
DROP TABLE `payment`;
