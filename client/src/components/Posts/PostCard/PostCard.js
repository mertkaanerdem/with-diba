import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { deletePost, likePost } from "../../../actions/posts";

export default function PostCard({ posts, setCurrentId }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const Likes = () => {
    if (posts.likes.length > 0) {
      return posts.likes.find(
        (like) => like == (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {posts.likes.length > 2
            ? `You and ${posts.likes.length - 1} others`
            : `${posts.likes.length} like${posts.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpOffAltIcon fontSize="small" />
          &nbsp;{posts.likes.length}{" "}
          {posts.likes.length == 1 ? "like" : "likes"}
        </>
      );
    }
    return (
      <>
        <ThumbUpOffAltIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  return (
    <div className="relative m-2 rounded-2xl shadow-md flex flex-col bg-gray-50 h-full">
      <div className="max-h-52  overflow-hidden filter saturate-0 hover:saturate-100 duration-1000 rounded-t-2xl">
        <img src={posts.selectedFile} className="w-full" alt={posts.name} />
      </div>

      <div className="absolute inset-x-0 flex flex-row justify-between">
        <div className="rounded-sm p-1 mx-3">
          <p className="text-gray-200 font-bold text-xl">{posts.name}</p>
          <p className="text-gray-200 text-xs p-1 pl-3 bg-black bg-opacity-60 rounded-md">
            {moment(posts.createdAt).format("DD MMMM YYYY")}
          </p>
        </div>

        <div className="p-1 mx-3">
          {(user?.result?.googleId === posts?.creator ||
            user?.result?._id === posts?.creator) && (
            <button
              className="text-gray-200  font-bold cursor-pointer"
              onClick={() => setCurrentId(posts._id)}
            >
              ...
            </button>
          )}
        </div>
      </div>

      <div className="p-1 mx-3">
        <div>
          <p className="text-gray-400">{posts.tags.map((tag) => `#${tag}`)}</p>
        </div>

        <div>
          <p className="font-bold text-2xl text-center text-green-500">
            {posts.title}
          </p>
          <p className="py-2 text-justify">{posts.message}</p>
        </div>

        <div className="inset-x-4 absolute bottom-1 flex flex-row justify-between">
          <button
            disabled={!user?.result}
            onClick={() => dispatch(likePost(posts._id))}
          >
            <Likes />
          </button>

          {(user?.result?.googleId === posts?.creator ||
            user?.result?._id === posts?.creator) && (
            <button onClick={() => dispatch(deletePost(posts._id))}>
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
          )}
        </div>
      </div>
    </div>
  );
}
