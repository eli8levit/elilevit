import React from "react";
import { FaidInMotionContainer } from "~/components/layout";
import { ModalContent } from "~/components/modal-content";
import { Link, useLoaderData } from "@remix-run/react";
import { getBikePosts } from "~/models/posts";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/types";
import { genImageUrl } from "~/utilities";
import { PostCard } from "~/components/post-card";
import BlueCircle from "~/../public/blue-circle.svg";

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
            <span className="font-monaWide font-semibold leading-8 text-[#0000FF]">
              upgrading evolution
            </span>
          </h2>
        </div>
      </div>
      <div className="md:content-container relative py-8 md:pt-6">
        <img
          src={BlueCircle}
          className="absolute left-[50%] top-[50%] -z-[10] h-[800px] w-[600px] max-w-[600px] -translate-y-[50%] -translate-x-[50%] rotate-90 opacity-40 md:h-[1000px] md:w-full md:max-w-[unset] md:rotate-0"
        />
        <div className="mb-20 flex flex-col gap-y-4 rounded-2xl border-black border-opacity-10 bg-panel md:mb-40 md:gap-y-12 md:border-[0.5px] md:p-16 md:shadow-feed md:backdrop-blur-2xl">
          {POST_TYPES.map((type) => {
            return (
              <section className="flex flex-col">
                <h2 className="sticky left-0 ml-4 font-shantell text-2xl font-medium text-primary opacity-80 md:opacity-60 lg:text-3xl">
                  ◌ {type.title}
                </h2>
                <ul className="hide-scrollbar flex flex-row gap-4 overflow-auto p-6 pl-4 md:gap-8">
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
