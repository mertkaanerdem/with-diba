import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import Input from "./Input";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unseccessful. Try Later");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="m-3 p-4 w-1/4 bg-yellow-600 bg-opacity-90 rounded ">
        <p className="text-center text-white text-2xl font-extrabold tracking-wider">
          {isSignup ? "Sign Up" : "Sign In"}
        </p>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          {isSignup && (
            <>
              <Input
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                handleChange={handleChange}
                autoFocus
              />
              <Input
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                handleChange={handleChange}
              />
            </>
          )}
          <Input
            type="email"
            name="email"
            label="Email Address"
            placeholder="Email Address"
            handleChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            handleChange={handleChange}
          />
          {isSignup && (
            <Input
              type="password"
              name="confirmPassword"
              label="Repeat Password"
              placeholder="Repeat Password"
              handleChange={handleChange}
            />
          )}

          <button
            className="bg-green-600 hover:bg-green-800 m-2 p-1 text-white shadow-md rounded w-1/2 self-center"
            type="submit"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>

          <GoogleLogin
            clientId="1046672128852-jh9mhngei5p4mt4qhl779s5be61frmkf.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="mt-2 flex justify-center items-center rounded w-full bg-white hover:bg-gray-100 text-red-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
              >
                <FcGoogle className="ml-3 w-8 h-8" />{" "}
                <p className="px-2">Login with Google</p>
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <button
            className="p-1 text-white shadow-sm rounded"
            onClick={switchMode}
          >
            {isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
