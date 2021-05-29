import React from "react";

export default function Forms() {
  return (
    <div className="py-1 rounded-sm w-full shadow-md bg-gray-50">
      <p className="text-gray-300 text-2xl font-bold text-center pb-5">
        Creating a Memory
      </p>

      <div className="mb-5 w-full text-center">
        <label htmlFor="name" className="transition-all shadow-md ">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            className="px-2 w-3/4 border-2  rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
          />
        </label>
        <label htmlFor="title" className="transition-all m-2 shadow-md ">
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            className="px-2 w-3/4 border-2 border-blue-200 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
          />
        </label>
        <label htmlFor="message" className="transition-all m-2 shadow-md ">
          <input
            id="message"
            type="text"
            name="message"
            placeholder="Message"
            className="px-2 w-3/4 border-2 border-blue-200 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
          />
        </label>
        <label htmlFor="tags" className="transition-all m-2 shadow-md ">
          <input
            id="tags"
            type="text"
            name="tags"
            placeholder="Tags"
            className="px-2 w-3/4 border-2 border-blue-200 rounded-sm text-black placeholder-blue-300 border-blue-400 mb-2"
          />
        </label>
        <label htmlFor="img" className="transition-all m-2">
          <input
            id="img"
            type="file"
            name="img"
            placeholder="img"
            className="py-1 w-3/4  mb-2 "
          />
        </label>
        <label htmlFor="submit" className="transition-all m-2 shadow-md ">
          <input
            id="submit"
            type="button"
            name="submit"
            value="SUBMIT"
            className="py-2 w-3/4 bg-blue-700 rounded-md text-gray-50 font-bold mb-2 shadow-md cursor-pointer"
          />
        </label>
        <label htmlFor="clear" className="transition-all m-2 shadow-md ">
          <input
            id="clear"
            type="button"
            name="clear"
            value="CLEAR"
            className="py-1 w-3/4 bg-red-500 rounded-md text-gray-50 font-bold mb-2 shadow-md cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
}
