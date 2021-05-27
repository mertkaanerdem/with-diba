import React from "react";
import PostCard from "./PostCard/PostCard";

export default function Posts() {
  return (
    <>
      <div>
        <h1 className="bg-yellow-500">Posts</h1>
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}
