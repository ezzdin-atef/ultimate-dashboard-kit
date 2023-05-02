import { closeSidebar } from "@/app/slices/sidebar.slice";
import { RootState } from "@/app/store";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function Item({ name, icon, link }: TSidebarItem) {
  const isCollapsed = useSelector((state: RootState) => state.sidebar.isCollapsed);

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          clsx({
            "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group":
              true,
            "bg-gray-100 dark:bg-gray-700": isActive,
          })
        }
        end
      >
        <div className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
          {icon}
        </div>
        <span className={clsx({ "ml-3": true, hidden: isCollapsed })}>{name}</span>
      </NavLink>
    </li>
  );
}
