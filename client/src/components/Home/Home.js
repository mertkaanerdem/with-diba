import React, { useState, useEffect } from "react";

import Posts from "../Posts/Posts";
import Form from "../Forms/Form";

import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 px-2">
      <div className="p-4 w-full md:w-2/3 ">
        <Posts setCurrentId={setCurrentId} />
      </div>

      <div className="p-4 w-full md:w-1/3">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
}

export default Home;
