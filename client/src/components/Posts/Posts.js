import React from "react";
import { useSelector } from "react-redux";

import PostCard from "./PostCard/PostCard";

export default function Posts() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <div className="flex w-full flex-column-reverse md:flex-row flex-wrap h-2/3">
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_jb73aigf.json"
        background="transparent"
        loop
        hover
        autoplay
        className="w-full"
      ></lottie-player>
    </div>
  ) : (
    <div className="flex w-full flex-column-reverse md:flex-row flex-wrap">
      {posts.map((post) => (
        <div key={post._id} className="lg:w-1/2 w-full">
          <PostCard
            title={post.title}
            message={post.message}
            tags={post.tags}
            selectedFile={post.selectedFile}
          />
        </div>
      ))}
    </div>
  );
}
