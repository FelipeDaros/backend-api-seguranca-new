/*
  Warnings:

  - You are about to alter the column `created_at` on the `TimeAlert` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TimeAlert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "late" BOOLEAN NOT NULL,
    CONSTRAINT "TimeAlert_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TimeAlert" ("created_at", "id", "late", "user_id") SELECT "created_at", "id", "late", "user_id" FROM "TimeAlert";
DROP TABLE "TimeAlert";
ALTER TABLE "new_TimeAlert" RENAME TO "TimeAlert";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
