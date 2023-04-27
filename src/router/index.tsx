import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "@/pages/Login";
import UsersManagementPage from "@/pages/UsersManagementPage";
import NotFoundPage from "@/pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/manage",
    children: [
      {
        path: "users",
        element: <UsersManagementPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
