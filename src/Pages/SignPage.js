import React, { useRef, useState } from "react";
import netflixBg from "../Img/netflixBg.jpg";
import { checkValidation } from "../utils/validation";

const SignPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handelOnClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };
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
        <form onSubmit={(e) => e.preventDefault()}>
          {!signIn && (
            <input
              ref={name}
              className="px-4 py-2 my-2 bg-[#14100f] border w-full rounded-lg"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or Phone number"
            className="px-4 py-2 my-2 bg-[#14100f] border w-full rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-4 py-2 my-2 bg-[#14100f] border w-full rounded-lg"
          />
          <p className="text-red-600 font-bold">{errorMessage}</p>
          <button
            className="w-full px-4 py-3 my-2 bg-red-700 rounded-lg font-bold"
            onClick={handelOnClick}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

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
