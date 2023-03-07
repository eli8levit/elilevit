import { prisma } from "~/db.server";

const normalizePost = (post: any) => ({
  ...post,
  createdAt: new Date(post.createdAt).toLocaleDateString(),
});

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
        tag: true,
      },
      where: { published: true, type: "BIKE" },
    })
    .then((posts) => {
      return posts.map(normalizePost);
    });
};

export const getPost = (id: number) => {
  return prisma.posts
    .findFirst({
      where: { id },
    })
    .then(normalizePost);
};
