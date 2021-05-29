import React from "react";
import Form from "./components/Forms/Form.js";
import Posts from "./components/Posts/Posts.js";

const App = () => {
  return (
    <div className="bg-hero-pattern bg-auto bg-no-repeat bg-cover  bg-center">
    <div className="container mx-auto py-2 ">
      <div
        className="m-2 rounded-md shadow-md flex justify-center items-center m-2 p-5 bg-gradient-to-r from-gray-50  to-blue-100 "
        
      >
        <h1 className="text-4xl font-bold px-4" >
          With Diba
        </h1>
        <img
        alt="Annesini tanımıyorum"
          className="w-1/12 rounded-full filter saturate-0 hover:saturate-100 duration-1000"
          src={"/diba.jpg"}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 px-2" >
        <div className="p-4 w-full md:w-2/3 ">
          <Posts/>
        </div>

        <div className="p-4 w-full md:w-1/3">
          <Form />
        </div>
      </div>
    </div>
    </div>
  );
};



export default App;
