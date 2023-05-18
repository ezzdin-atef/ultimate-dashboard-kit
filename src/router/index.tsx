import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "@/pages/Login";
import UsersManagementPage from "@/pages/UsersManagementPage";
import NotFoundPage from "@/pages/404";
import ASideLayout from "@/layout/ASideLayout";
import FormsComponentsPage from "@/pages/UserSettings";
import UserSettingsPage from "@/pages/UserSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/manage",
    element: <ASideLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersManagementPage />,
      },
      {
        path: "settings",
        element: <UserSettingsPage />,
      },
    ],
  },
  {
    path: "/components",
    element: <ASideLayout />,
    children: [
      {
        path: "forms",
        element: <FormsComponentsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
