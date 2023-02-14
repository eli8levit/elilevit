import { prisma } from "~/db.server";

export const getBikePosts = ({ isDetailed }: { isDetailed: boolean }) => {
  return prisma.posts
    .findMany({
      select: {
        createdAt: true,
        title: true,
        id: true,
        content: isDetailed,
        image: true,
        subtitle: true,
      },
      where: { published: false, type: "BIKE" },
    })
    .then((posts) =>
      posts.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt).toLocaleDateString(),
      }))
    );
};
