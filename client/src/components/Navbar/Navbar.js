import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import decode from "jwt-decode";

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
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="m-2 rounded-md shadow-md flex justify-around items-center p-5 bg-gradient-to-r from-gray-50  to-blue-100 ">
      <div>
        <Link className="flex items-center" to="/">
          <h1 className="text-4xl font-bold px-4">With Diba</h1>
          <img
            alt="Annesini tanımıyorum"
            className="w-1/12 rounded-full filter saturate-0 hover:saturate-100 duration-1000"
            src={"/diba.jpg"}
          />
        </Link>
      </div>
      {user && (
        <div
          className="bg-green-500  p-1 text-white shadow-md rounded w-1/12 text-center"
          alt={user?.result.name}
        >
          <img
            className="rounded shadow-md"
            src={user?.result.imageUrl}
            width="100"
          ></img>
          <p className="text-xs py-1 font-medium">{user?.result.name}</p>
        </div>
      )}

      {user ? (
        <button
          className="bg-red-500 hover:bg-red-600 p-1 text-white shadow-md rounded w-1/12 text-center"
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
