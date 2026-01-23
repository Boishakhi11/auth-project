import React, { useState } from "react";
import MyContainer from "../componets/MyContainer/MyContainer";
import { Link } from "react-router";
import { FaEye, FaGoogle } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log(userCredential.user);
        toast.success("Succesfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
        setUser(userCredential.user);
        console.log(userCredential.user);
        toast.success("Succesfully Login");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          return "Please enter a valid email address.";
        } else if (error.code === "auth/user-not-found") {
          return "No account found with this email.";
        } else if (error.code === "auth/wrong-password") {
          return "Incorrect password.";
        } else if (error.code === "auth/user-disabled") {
          return "This account has been disabled.";
        } else if (error.code === "auth/too-many-requests") {
          return "Too many attempts. Try again later.";
        } else if (error.code === "auth/network-request-failed") {
          return "Network error. Check your internet connection.";
        } else {
          return "Login failed. Please try again.";
        }
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-green-200">
      <MyContainer>
        <div className="hero bg-green-200 min-h-screen p-8">
          <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-500">
                Welcome Back!
              </h1>
              <p className="py-6 text-gray-600">
                Login into our sytem to go to dashboard
              </p>
            </div>
            <div className="card w-full bg-green-100 max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                {user ? (
                  <div className="text-center space-y-2">
                    <img
                      className="h-20 w-20 rounded-full mx-auto"
                      src={
                        user?.photoURL ||
                        "https://www.freepik.com/premium-vector/user-icon-vector_251942830.htm"
                      }
                    ></img>
                    <h1>{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-success mt-4"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
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
                    <button className="btn btn-success mt-4">Login</button>
                    <p className="text-gray-500 mt-2.5">Or Sign in with</p>
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="btn btn-neutral mt-4 cursor-pointer text-center"
                    >
                      <FaGoogle /> Login With Google
                    </button>

                    <div className="mt-2 ">
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
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignIn;
