import React from "react";
import PostCard from "./PostCard/PostCard";

export default function Posts() {
  return (
    <div className="flex w-full flex-column md:flex-row flex-wrap">
      <div className="lg:w-1/2 w-full">
        <PostCard />
      </div>
      <div className="lg:w-1/2 w-full">
        <PostCard />
      </div>
      <div className="lg:w-1/2 w-full">
        <PostCard />
      </div>
    </div>
  );
}

// flex w-full flex-col md:flex-row flex-wrap
