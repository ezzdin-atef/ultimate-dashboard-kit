import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "@/pages/Login";
import UsersManagementPage from "@/pages/UsersManagementPage";

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
]);
