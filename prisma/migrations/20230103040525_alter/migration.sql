-- AddForeignKey
ALTER TABLE "service-day-itens" ADD CONSTRAINT "service-day-itens_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service-day-itens" ADD CONSTRAINT "service-day-itens_itens_id_fkey" FOREIGN KEY ("itens_id") REFERENCES "itens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service-day-itens" ADD CONSTRAINT "service-day-itens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
