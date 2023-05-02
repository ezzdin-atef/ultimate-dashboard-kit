"use client";
import React, { useEffect, useRef } from "react";
import Item from "./Item";
import Collapse from "./Collapse";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import clsx from "clsx";
import { toggleSidebar } from "@/app/slices/sidebar.slice";
import useClickOutside from "@/hooks/useClickOutside";

export default function Sidebar({ items }: TSidebar) {
  const { isOpen, isCollapsed } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <>
      <aside
        id="default-sidebar"
        className={clsx({
          "md:flex fixed top-0 left-0 z-30 flex-col flex-shrink-0 h-full mt-16 font-normal duration-75 lg:flex transition-width":
            true,
          "hidden w-16": isCollapsed,
          "w-64": !isCollapsed,
        })}
        aria-label="Sidenav"
      >
        <div className="py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            {items.map((item, index) =>
              item.children ? (
                <Collapse key={index} link={item.link} name={item.name} children={item.children} icon={item.icon} />
              ) : (
                <Item key={index} link={item.link} name={item.name} icon={item.icon} />
              )
            )}
          </ul>
        </div>
      </aside>
      {isOpen && (
        <div
          className="md:hidden z-20 bg-gray-700 opacity-75 fixed top-0 bottom-0 left-0 right-0 min-h-screen min-w-full"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </>
  );
}
