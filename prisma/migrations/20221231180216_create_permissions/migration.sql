-- CreateTable
CREATE TABLE "permissions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "permissions_id_key" ON "permissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_key" ON "permissions"("name");
