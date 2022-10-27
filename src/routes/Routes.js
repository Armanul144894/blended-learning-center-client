import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../LoginContainer/Login/Login";
import Register from "../LoginContainer/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Packages from "../Pages/Packages/Packages";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
        {
          path: "/course/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://blended-learning-center-server.vercel.app/course/${params.id}`
            );
          },
          element: <CourseDetails></CourseDetails>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/packages",
          element: (
            <PrivateRoutes>
              <Packages></Packages>
            </PrivateRoutes>
          ),
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
