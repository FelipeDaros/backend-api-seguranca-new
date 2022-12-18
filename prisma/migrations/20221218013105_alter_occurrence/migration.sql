/*
  Warnings:

  - Added the required column `locale` to the `occurrence` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_occurrence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "occurrence_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_occurrence" ("created_at", "id", "resume", "user_id") SELECT "created_at", "id", "resume", "user_id" FROM "occurrence";
DROP TABLE "occurrence";
ALTER TABLE "new_occurrence" RENAME TO "occurrence";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
