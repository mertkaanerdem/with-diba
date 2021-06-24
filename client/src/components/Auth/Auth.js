import React, { useState } from "react";

import Input from "./Input";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div
      style={{
        backgroundColor: "wheat",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p>{isSignup ? "Sign Up" : "Sign In"}</p>
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
          <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>

          <button onClick={switchMode}>
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
