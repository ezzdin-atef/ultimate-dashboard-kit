import React from "react";
import NotificationsButton from "../NotificationsButton";
import ThemeToggleButton from "../ThemeToggleButton";
import UserDropdown from "./UserDropdown";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between px-3 py-3 h-16 fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-2xl font-normal">
        <span className="text-blue-600">Ezzdin</span> Atef
      </h1>
      <div className="flex items-center gap-2">
        <NotificationsButton />
        <ThemeToggleButton />
        <UserDropdown />
      </div>
    </div>
  );
}
