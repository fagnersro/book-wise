/*
  Warnings:

  - A unique constraint covering the columns `[github_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_github_id_key" ON "users"("github_id");
