import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { ModalContent } from "~/components/modal-content";
import { Link, useLoaderData } from "@remix-run/react";
import { getBikePosts } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { genImageUrl } from "~/utilities";
import { PostCard } from "~/components/post-card";
import Circle2 from "~/sources/images/grad.svg";

const POST_TYPES = [
  { id: "rides", title: "ride history" },
  { id: "upgrades", title: "upgrades" },
];

export const loader: LoaderFunction = async (): Promise<{ posts: Post[] }> => {
  return {
    posts: (await getBikePosts({ isDetailed: false })) || [],
  };
};

export default function Bike() {
  const { posts = [] } = useLoaderData<{
    posts: Post[];
  }>();

  const bikePosts = posts.filter((post) => post.tag === "rides");
  const upgradePosts = posts.filter((post) => post.tag === "upgrades");

  return (
    <FaidInMotionContainer>
      <div className="content-container pt-10">
        <div className="pb-4 md:p-20 md:pb-10">
          <h1 className="heading">Bike Blog</h1>
          <h2 className="subheading">
            This page is about my bike and stuff related to cycling: my rides,
            photos and{" "}
            <span className="font-monaWide font-semibold leading-8 text-primary">
              upgrading evolution
            </span>
          </h2>
        </div>
      </div>
      <div className="md:content-container py-8 md:pt-6">
        <div className="relative mb-20 flex flex-col gap-y-4 rounded-2xl py-10 md:mb-40 md:gap-y-12 md:border-[0.5px] md:border-black md:border-opacity-10 md:bg-panel md:p-20 md:shadow-feed md:backdrop-blur-2xl">
          <img
            src={Circle2}
            className="absolute top-0 bottom-0 left-0 -z-[10] h-full w-full opacity-30"
          />
          {POST_TYPES.map((type) => {
            return (
              <section key={type.id} className="flex flex-col">
                <h2 className="sticky left-0 ml-4 font-shantell text-2xl font-medium text-primary lg:text-3xl">
                  ◌ {type.title}
                </h2>
                <ul className="hide-scrollbar md:show-scrollbar flex flex-row gap-4 overflow-auto p-6 pl-4 md:gap-8">
                  {(type.id === "rides" ? bikePosts : upgradePosts).map(
                    (post: Post, index) => {
                      return (
                        <Link
                          key={post.id}
                          to={`/bike/${post.id}`}
                          preventScrollReset
                        >
                          <PostCard
                            image={genImageUrl(post.image, "600x600")}
                            description={post.subtitle || ""}
                            title={post.title}
                            id={post.id}
                            tag={post.tag}
                            date={post.createdAt}
                            index={index + 1}
                          />
                        </Link>
                      );
                    }
                  )}
                  <div className="h-12 min-w-[50px]" />
                </ul>
              </section>
            );
          })}
        </div>
        <ModalContent route="bike" />
      </div>
    </FaidInMotionContainer>
  );
}
