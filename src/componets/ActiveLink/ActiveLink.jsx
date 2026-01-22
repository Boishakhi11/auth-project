import React from "react";
import { NavLink } from "react-router";

const ActiveLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-accent" : `${className} font-semibold`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
