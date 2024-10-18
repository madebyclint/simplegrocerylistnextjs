/*
  Warnings:

  - Added the required column `createdById` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "createdById" INTEGER NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ListSimple" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "listItemsSimple" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListSimple_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
