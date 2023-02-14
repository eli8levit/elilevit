/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "title" VARCHAR(255) NOT NULL,
    "subtitle" TEXT,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "tag" TEXT,
    "type" "Type" NOT NULL DEFAULT 'GENERAL',
    "image" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
