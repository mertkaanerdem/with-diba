import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    //JWT
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="m-2 rounded-md shadow-md flex justify-around items-center m-2 p-5 bg-gradient-to-r from-gray-50  to-blue-100 ">
      <div>
        <Link className="flex flex-row items-center" to="/">
          <h1 className="text-4xl font-bold px-4">With Diba</h1>
          <img
            alt="Annesini tanımıyorum"
            className="w-1/12 rounded-full filter saturate-0 hover:saturate-100 duration-1000"
            src={"/diba.jpg"}
          />
        </Link>
      </div>

      {user ? (
        <button
          className="bg-red-600 hover:bg-red-800 p-1 text-white shadow-md rounded w-1/12 text-center"
          onClick={logout}
        >
          {" "}
          Logout
        </button>
      ) : (
        <Link
          className="bg-green-600 hover:bg-green-800 p-1 text-white shadow-md rounded w-1/12 text-center"
          to="/auth"
        >
          {" "}
          Sign In
        </Link>
      )}
    </div>
  );
}

export default Navbar;
