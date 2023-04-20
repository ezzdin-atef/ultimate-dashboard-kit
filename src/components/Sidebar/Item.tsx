import React from "react";

export default function Item({ name, icon }: TSidebarItem) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon}
        <span className="ml-3">{name}</span>
      </a>
    </li>
  );
}
