import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    /*  creator: "",*/
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  function clear() {
    setCurrentId(0);
    setPostData({
      /*   creator: "",*/
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  }

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId == 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <div className="p-10 my-2 rounded-sm w-full shadow-lg bg-gray-200">
        <h6 className="text-xl text-center text-red-700 font-semibold">
          Please sign in to create your own memories and like other's memories.
        </h6>
      </div>
    );
  }

  return (
    <div className="py-1 rounded-sm w-full shadow-md bg-gray-50">
      <p className="text-gray-300 text-2xl font-bold text-center pb-5">
        {currentId ? "Editing" : "Creating"} a Memory
      </p>

      <div className="mb-5 w-full text-center">
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          {/*

            <label htmlFor="creator" className="transition-all shadow-md ">
            <input
              id="creator"
              type="text"
              name="creator"
              placeholder="Creator"
              className="px-2 w-3/4 border-2  rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
              />
          </label>
            */}
          <label htmlFor="title" className="transition-all m-2 shadow-md ">
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              className="px-2 w-3/4 border-2 border-blue-200 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </label>
          <label htmlFor="message" className="transition-all m-2 shadow-md ">
            <input
              id="message"
              type="text"
              name="message"
              placeholder="Message"
              className="px-2 w-3/4 border-2 border-blue-200 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </label>
          <label htmlFor="tags" className="transition-all m-2 shadow-md ">
            <input
              id="tags"
              type="text"
              name="tags"
              placeholder="Tags"
              className="px-2 w-3/4 border-2 border-blue-200 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
          </label>
          <div className=" w-1/2 ml-8 my-2">
            <label
              htmlFor="img"
              className=" transition-all m-2 py-2 w-3/4  mb-2"
            >
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </label>
          </div>
          <label htmlFor="submit" className="transition-all m-2 shadow-md ">
            <button
              className="py-2 w-3/4 bg-blue-700 rounded-md text-gray-50 font-bold mb-2 shadow-md cursor-pointer"
              type="submit"
            >
              SUBMIT
            </button>
          </label>
          <label htmlFor="clear" className="transition-all m-2 shadow-md ">
            <input
              id="clear"
              type="button"
              name="clear"
              value="CLEAR"
              className="py-1 w-3/4 bg-red-500 rounded-md text-gray-50 font-bold mb-2 shadow-md cursor-pointer"
              onClick={clear}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
