import React, { useState } from "react";
import MyContainer from "../componets/MyContainer/MyContainer";
import { Link } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    // password check
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "password need to be 8 characters, one uppercase letter, one lowercase letter and one special character",
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("Succefully Sign Up");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-green-200">
      <MyContainer>
        <div className="hero bg-green-200 min-h-screen p-8">
          <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-500">Register Now</h1>
              <p className="py-6 text-gray-600">
                Register to be one of our member
              </p>
            </div>
            <div className="card w-full bg-green-100 max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSignUp}>
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
                    <button className="btn btn-success mt-4">Sign Up</button>
                  </div>
                </form>
                <div className=" ">
                  <p className="">
                    Already have a Account?{" "}
                    <Link
                      className="text-blue-600 underline underline-offset-2 cursor-pointer "
                      to={"/sign-in"}
                    >
                      Login
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

export default SignUp;
