/*
  Warnings:

  - You are about to drop the `service-day-itens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "service-day-itens" DROP CONSTRAINT "service-day-itens_itens_id_fkey";

-- DropForeignKey
ALTER TABLE "service-day-itens" DROP CONSTRAINT "service-day-itens_post_id_fkey";

-- DropForeignKey
ALTER TABLE "service-day-itens" DROP CONSTRAINT "service-day-itens_user_id_fkey";

-- DropTable
DROP TABLE "service-day-itens";

-- CreateTable
CREATE TABLE "service_day_itens" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "post_id" TEXT,
    "itens_id" TEXT,

    CONSTRAINT "service_day_itens_pkey" PRIMARY KEY ("id")
);
