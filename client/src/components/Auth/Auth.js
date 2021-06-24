import React from "react";

const Auth = () => {
  const isSignup = false;

  const handleSubmit = () => {};

  return (
    <div style={{ backgroundColor: "wheat" }}>
      <div>
        <p>{isSignup ? "Sign Up" : "Sign In"}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" />
        </form>
      </div>
    </div>
  );
};

export default Auth;
