import React from "react";
import moment from "moment";

export default function PostCard({ posts, setCurrentId }) {
  return (
    <div className="relative m-2 rounded-2xl shadow-md flex flex-col bg-gray-50 h-full">
      <div className="max-h-52  overflow-hidden filter saturate-0 hover:saturate-100 duration-1000 rounded-t-2xl">
        <img
          src={posts.selectedFile}
          className="w-full"
          alt="Annesini tanımıyorum"
        />
      </div>

      <div className="absolute inset-x-0 flex flex-row justify-between">
        <div className="rounded-sm p-1 mx-3">
          <p className="text-gray-200 font-bold text-xl">{posts.creator}</p>
          <p className="text-gray-200 text-xs p-1 bg-black bg-opacity-60 rounded-md">
            {moment(posts.createdAt).fromNow()}
          </p>
        </div>

        <div className="p-1 mx-3">
          <button
            className="text-gray-200  font-bold cursor-pointer"
            onClick={() => setCurrentId(posts._id)}
          >
            ...
          </button>
        </div>
      </div>

      <div className="p-1 mx-3">
        <div>
          <p className="text-gray-400">{posts.tags.map((tag) => `#${tag}`)}</p>
        </div>

        <div>
          <p className="font-bold text-2xl text-center">{posts.title}</p>
          <p className="py-2 text-justify">{posts.message}</p>
        </div>

        <div className="inset-x-4 absolute bottom-1 flex flex-row justify-between">
          <button onClick={() => {}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-red-500 duration-400 cursor-pointer "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            {posts.likeCount}
          </button>

          <button onClick={() => {}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-yellow-500 duration-400 cursor-pointer "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
