-- CreateTable
CREATE TABLE "Cep" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cep" TEXT NOT NULL,
    "data" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Cep_cep_key" ON "Cep"("cep");
