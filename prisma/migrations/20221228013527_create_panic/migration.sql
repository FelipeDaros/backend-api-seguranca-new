-- CreateTable
CREATE TABLE "panic" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verify" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "panic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "panic" ADD CONSTRAINT "panic_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
