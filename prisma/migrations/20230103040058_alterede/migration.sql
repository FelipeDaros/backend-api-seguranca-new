/*
  Warnings:

  - You are about to drop the column `usersId` on the `serviceday` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "serviceday" DROP CONSTRAINT "serviceday_usersId_fkey";

-- AlterTable
ALTER TABLE "serviceday" DROP COLUMN "usersId",
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "serviceday" ADD CONSTRAINT "serviceday_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
