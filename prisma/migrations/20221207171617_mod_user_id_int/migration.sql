/*
  Warnings:

  - Made the column `userId` on table `Status` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "protocolo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Status_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Status" ("address", "createdAt", "id", "name", "protocolo", "userId") SELECT "address", "createdAt", "id", "name", "protocolo", "userId" FROM "Status";
DROP TABLE "Status";
ALTER TABLE "new_Status" RENAME TO "Status";
CREATE UNIQUE INDEX "Status_address_key" ON "Status"("address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
