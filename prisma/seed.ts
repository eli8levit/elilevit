import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const posts = await prisma.posts.findMany();
  await prisma.posts
    .create({
      data: {
        content:
          "this is my ocntent sdfkjhsdflkjhsflkjhsdlfkhsdfkhskdfjhklsdlfsjhjdfk",
        title: "First Ride",
        subtitle: "Start at Ishpro Zone, 1 road. Emek Ayalon, 3 road; 431",
        type: "BIKE",
        image: "https://ucarecdn.com/6314d60d-c721-4710-b2c7-abe35f32d5de/-/",
      },
    })
    .then(() => console.log("created 👍🏻"))
    .catch((err) => console.log("errror 👎🏼", console.error(err)));
}

seed();
