import { genImageUrlById } from "~/utilities";
import React from "react";
import { PostPage } from "~/components/post-page";

export default function Georgia() {
  return (
    <PostPage
      title={
        <>
          Tbilisi{" "}
          <span className="font-hubot text-2xl text-zinc-500">Georgia</span>
        </>
      }
    >
      <p className="mb-8 max-w-[600px] font-mona text-lg 2xl:max-w-[800px] 2xl:text-2xl">
        Tbisisi is great place to travel. A lot of history, beautiful
        architecture and most important - dereliction wine and food. I enjoyed
        to walk through its old streets in old town and to take a pictures.
      </p>
      <div className="grid auto-rows-[450px] grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4">
        <img
          src={genImageUrlById("43d5d3b5-22ad-4898-9a91-ab66c0dc159a")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("02712266-f5af-47dd-afbc-3db26975c414")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("d4b22d03-bf35-4c23-a996-6d98951f4998")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("e3c28583-8b0f-466c-8f22-2db3ab207817")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("b5ed50c6-79b9-48ae-a334-90f89f41bfb3")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("52b75a67-12ca-4bd5-bfed-356b7abb2e26")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("4562c3f6-77c8-4809-a482-daf68894f13b")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("46c17fe1-1a30-41e6-85d1-48bedc0ca574")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("1f32a751-9dc0-4c99-b95c-99e163f8c80a")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("6083beef-8f4f-42ff-ba99-e3527f74ea12")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("aeddab18-eac6-497d-8821-fd97a7a2209a")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("3dab8674-b728-4994-8ebd-a031bee9332b")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("4b7ff321-2346-419c-b43f-c0c8d5d6e495")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("bd737aa5-f2b2-48f4-a5a1-14c9d87c886f")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("d01e0a28-e293-4ca8-a78f-e9824e2ecacf")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("2389bc10-8e25-4d57-bbce-e0afe3e1fdaf")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />{" "}
        <img
          src={genImageUrlById("3f454946-5eb3-43d9-8531-2424b17648ba")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("baa67658-d41e-4163-84ac-4aa85a1ad361")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("3bf8cdea-66a9-47b8-9233-45ebbf2d00b3")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
        <img
          src={genImageUrlById("4b034df8-2eaa-4c52-a9db-eaabf273725e")}
          alt="Tree roots in the water of spring"
          className="h-full w-full rounded-sm object-cover"
        />
      </div>
    </PostPage>
  );
}
