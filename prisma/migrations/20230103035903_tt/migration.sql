/*
  Warnings:

  - The primary key for the `service-day-itens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `service-day-itens` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "serviceday" DROP CONSTRAINT "serviceday_user_id_fkey";

-- AlterTable
ALTER TABLE "service-day-itens" DROP CONSTRAINT "service-day-itens_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "service-day-itens_pkey" PRIMARY KEY ("post_id", "itens_id", "user_id");

-- AlterTable
ALTER TABLE "serviceday" ADD COLUMN     "usersId" TEXT;

-- AddForeignKey
ALTER TABLE "serviceday" ADD CONSTRAINT "serviceday_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
