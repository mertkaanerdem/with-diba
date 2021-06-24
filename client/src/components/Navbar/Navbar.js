import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = null;
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
      <div className="bg-green-600 p-1 text-white shadow-md rounded w-1/12 text-center">
        {user ? (
          <button>Çıkış Yap</button>
        ) : (
          <Link to="/auth">
            {" "}
            <button>Giriş Yap</button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
