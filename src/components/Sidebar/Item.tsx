import React from "react";
import { Link } from "react-router-dom";

export default function Item({ name, icon, link }: TSidebarItem) {
  return (
    <li>
      <Link
        to={link}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <div className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
          {icon}
        </div>
        <span className="ml-3">{name}</span>
      </Link>
    </li>
  );
}
