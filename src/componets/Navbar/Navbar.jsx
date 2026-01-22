import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  return (
    <div className=" bg-cyan-400">
      <MyContainer className="flex justify-between items-center">
        <figure>
          <img className="w-12 h-12" src="./Logo.png" alt="logo image"></img>
        </figure>
        <ul className="flex justify-between items-center gap-3">
          <li>
            <ActiveLink to={"/home"}> Home </ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/about-us"}>About</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/contact-us"}>Contact</ActiveLink>
          </li>
        </ul>

        <button className="btn btn-accent">LogIn</button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
