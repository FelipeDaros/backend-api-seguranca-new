-- AlterTable
ALTER TABLE "service_day_itens" ADD COLUMN     "service_day_id" TEXT;

-- AddForeignKey
ALTER TABLE "service_day_itens" ADD CONSTRAINT "service_day_itens_service_day_id_fkey" FOREIGN KEY ("service_day_id") REFERENCES "serviceday"("id") ON DELETE SET NULL ON UPDATE CASCADE;
