import React from "react";
import MyContainer from "../componets/MyContainer/MyContainer";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div className="bg-cyan-200">
      <MyContainer>
        <div className="hero bg-cyan-200 min-h-screen p-8">
          <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-500">
                Welcome Back!
              </h1>
              <p className="py-6 text-gray-600">
                Login into our sytem to go to dashboard
              </p>
            </div>
            <div className="card w-full bg-cyan-100 max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-accent mt-4">Login</button>
                </fieldset>
                <div className=" ">
                  <p className="">
                    Do not have a Account?{" "}
                    <Link
                      className="text-blue-600 underline underline-offset-2 cursor-pointer "
                      to={"/sign-up"}
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignIn;
