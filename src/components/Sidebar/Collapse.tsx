import { RootState } from "@/app/store";
import clsx from "clsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Collapse({ name, icon, children }: TSidebarItem) {
  const isCollapsed = useSelector((state: RootState) => state.sidebar.isCollapsed);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <button
        type="button"
        className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 flex-shrink-0 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
          {icon}
        </div>
        <span className={clsx({ "flex-1 ml-3 text-left whitespace-nowrap": true, hidden: isCollapsed })}>{name}</span>
        <svg
          aria-hidden="true"
          className={clsx({
            "flex-shrink-0": true,
            "w-6 h-6": !isCollapsed,
            "-rotate-90 md:w-4 md:h-4": isCollapsed,
          })}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul
          className={clsx({
            "py-2 space-y-2 static": true,
            "md:absolute md:top-0 md:left-full md:bg-white md:shadow md:rounded-lg md:w-44 ": isCollapsed,
          })}
        >
          {children?.map((el, index) => (
            <li key={index}>
              <Link
                to={el.link}
                className={clsx({
                  "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700":
                    true,
                  "md:pl-2 md:rounded-none": isCollapsed,
                })}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
