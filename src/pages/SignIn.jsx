import React, { useState } from "react";
import MyContainer from "../componets/MyContainer/MyContainer";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const SignIn = () => {
  const [show, setShow] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("clicked", password, email);

    // password check
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "password need to be 8 characters, one uppercase letter, one lowercase letter and one special character",
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Succesfully Login");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

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
                <form onSubmit={handleSignIn}>
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative">
                    <label className="label">Password</label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Password"
                    />
                    <span
                      onClick={() => setShow(!show)}
                      className="absolute right-[24px] top-[33px] cursor-pointer"
                    >
                      {show ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-accent mt-4">Login</button>
                </form>
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
