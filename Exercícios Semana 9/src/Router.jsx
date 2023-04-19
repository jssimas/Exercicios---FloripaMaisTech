import { createBrowserRouter } from "react-router-dom";
import React from "react";
import  {App}  from "./App";
import  {Home}  from "./pages/Home";
import  {QuemSou}  from "./pages/QuemSou";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
    ],
  },
]);