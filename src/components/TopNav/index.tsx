import React from "react";
import NotificationsButton from "../NotificationsButton";
import ThemeToggleButton from "../ThemeToggleButton";
import UserDropdown from "./UserDropdown";
import { useDispatch } from "react-redux";
import { toggleCollapse, toggleSidebar } from "@/app/slices/sidebar.slice";

export default function TopNav() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-3 py-3 h-16 fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <button className="md:hidden cursor-pointer" onClick={() => dispatch(toggleSidebar())}>
          <img src="/icons/bars.svg" alt="bars-menu" width={25} />
        </button>
        <button className="hidden md:block cursor-pointer" onClick={() => dispatch(toggleCollapse())}>
          <img src="/icons/list-bullet.svg" alt="bars-menu" width={25} />
        </button>

        <h1 className="text-2xl font-normal">
          <span className="text-blue-600">Ezzdin</span> Atef
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <NotificationsButton />
        <ThemeToggleButton />
        <UserDropdown />
      </div>
    </div>
  );
}
