import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "home",
        Component: Home,
      },
      {
        path: "about-us",
        Component: About,
      },
      {
        path: "contact-us",
        Component: Contact,
      },
    ],
  },
]);
