-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" INTEGER NOT NULL DEFAULT 0,
    "post_id" TEXT DEFAULT '',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alert" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "points" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "points_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "itens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_itens" (
    "post_id" TEXT NOT NULL,
    "itens_id" TEXT NOT NULL,

    CONSTRAINT "post_itens_pkey" PRIMARY KEY ("post_id","itens_id")
);

-- CreateTable
CREATE TABLE "serviceday" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "report_reading" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "serviceday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service-day-itens" (
    "post_id" TEXT NOT NULL,
    "itens_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "service-day-itens_pkey" PRIMARY KEY ("post_id","itens_id","user_id")
);

-- CreateTable
CREATE TABLE "occurrence" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "occurrence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "round" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "point_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "time-alert" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "late" BOOLEAN NOT NULL,

    CONSTRAINT "time-alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "panic" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verify" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "panic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "company_name_key" ON "company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "points_name_key" ON "points"("name");

-- CreateIndex
CREATE UNIQUE INDEX "post_name_key" ON "post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_id_key" ON "permissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_key" ON "permissions"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alert" ADD CONSTRAINT "alert_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "points" ADD CONSTRAINT "points_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_itens" ADD CONSTRAINT "post_itens_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_itens" ADD CONSTRAINT "post_itens_itens_id_fkey" FOREIGN KEY ("itens_id") REFERENCES "itens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceday" ADD CONSTRAINT "serviceday_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "occurrence" ADD CONSTRAINT "occurrence_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "round" ADD CONSTRAINT "round_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "round" ADD CONSTRAINT "round_point_id_fkey" FOREIGN KEY ("point_id") REFERENCES "points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "round" ADD CONSTRAINT "round_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time-alert" ADD CONSTRAINT "time-alert_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "panic" ADD CONSTRAINT "panic_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
