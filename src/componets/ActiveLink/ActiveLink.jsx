import React from "react";
import { NavLink } from "react-router";

const ActiveLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 font-semibold"
            : `${className} `
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
