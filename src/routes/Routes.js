import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
        },
      ],
    },
    {
      path: "/*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
