-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "alert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "alert_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "company_id" TEXT NOT NULL,
    CONSTRAINT "points_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Itens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    CONSTRAINT "Post_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PostItens" (
    "post_id" TEXT NOT NULL,
    "itens_id" TEXT NOT NULL,

    PRIMARY KEY ("post_id", "itens_id"),
    CONSTRAINT "PostItens_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostItens_itens_id_fkey" FOREIGN KEY ("itens_id") REFERENCES "Itens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "company_name_key" ON "company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "points_name_key" ON "points"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Post_name_key" ON "Post"("name");
