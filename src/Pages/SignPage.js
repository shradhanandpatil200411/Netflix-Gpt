import React, { useState } from "react";
import netflixBg from "../Img/netflixBg.jpg";

const SignPage = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="h-screen">
      <div className="absolute">
        <img src={netflixBg} alt="bg" />
      </div>
      <div className="absolute w-3/12 my-36 bg-black mx-auto right-0 left-0 text-white bg-opacity-80 p-10">
        <h1 className="my-2 font-bold w-full text-2xl">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            className="px-4 py-2 my-2 bg-[#14100f] border w-full rounded-lg"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          type="email"
          placeholder="Email or Phone number"
          className="px-4 py-2 my-2 bg-[#14100f] border w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 my-2 bg-[#14100f] border w-full rounded-lg"
        />
        <button className="w-full px-4 py-3 my-2 bg-red-700 rounded-lg font-bold">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {signIn ? "New to Netflix?" : "Already Signed?"}
          <span
            className="hover:underline decoration-1 font-bold cursor-pointer"
            onClick={toggleSignIn}
          >
            {signIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignPage;
