import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../LoginContainer/Login/Login";
import Register from "../LoginContainer/Register/Register";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
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
        {
          path: "/courses/:id",
          loader: ({ params }) => {
            fetch(`http://localhost:5000/courses/${params.id}`);
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
