/*
  Warnings:

  - You are about to alter the column `github_id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "github_id" INTEGER,
    "login" TEXT,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("avatar_url", "created_at", "github_id", "id", "login", "name") SELECT "avatar_url", "created_at", "github_id", "id", "login", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_github_id_key" ON "users"("github_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
