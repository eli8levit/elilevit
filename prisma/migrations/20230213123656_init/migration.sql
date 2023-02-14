-- CreateEnum
CREATE TYPE "Type" AS ENUM ('BIKE', 'GENERAL');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "tag" TEXT,
    "type" "Type" NOT NULL DEFAULT 'GENERAL',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
