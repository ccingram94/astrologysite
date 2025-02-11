/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Horoscope` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Horoscope_date_key" ON "Horoscope"("date");
