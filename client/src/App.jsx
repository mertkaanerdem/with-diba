import React, { useState, useEffect } from "react";
import Form from "./components/Forms/Form";
import Posts from "./components/Posts/Posts";

import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="bg-hero-pattern bg-auto bg-no-repeat bg-cover  bg-center">
      <div className="container mx-auto py-2 ">
        <div className="m-2 rounded-md shadow-md flex justify-center items-center m-2 p-5 bg-gradient-to-r from-gray-50  to-blue-100 ">
          <h1 className="text-4xl font-bold px-4">With Diba</h1>
          <img
            alt="Annesini tanımıyorum"
            className="w-1/12 rounded-full filter saturate-0 hover:saturate-100 duration-1000"
            src={"/diba.jpg"}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-2 px-2">
          <div className="p-4 w-full md:w-2/3 ">
            <Posts setCurrentId={setCurrentId} />
          </div>

          <div className="p-4 w-full md:w-1/3">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
