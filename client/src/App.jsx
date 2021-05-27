import React from "react";
import Form from "./components/Forms/Form.js";
import Posts from "./components/Posts/Posts.js";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <div
        className=" shadow-md flex justify-center items-center m-2"
        style={styles.headerContainer}
      >
        <h1 className="text-4xl" style={styles.header}>
          With Diba
        </h1>
        <img
          className="w-1/12 rounded-full"
          style={styles.logo}
          src={"/diba.jpg"}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 px-2" >
        <div className="w-full md:w-2/3 ">
          <Posts/>
        </div>

        <div className="w-full md:w-1/3">
          <Form />
        </div>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    padding: 10,
    backgroundColor: "rgba(10, 100, 100, 0.5)",
  },
  header: {
    fontWeight: "bold",
    padding: 4,
  },
};

export default App;
