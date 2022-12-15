-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "protocolo" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Status_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Status" ("address", "id", "name", "protocolo") SELECT "address", "id", "name", "protocolo" FROM "Status";
DROP TABLE "Status";
ALTER TABLE "new_Status" RENAME TO "Status";
CREATE UNIQUE INDEX "Status_address_key" ON "Status"("address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
