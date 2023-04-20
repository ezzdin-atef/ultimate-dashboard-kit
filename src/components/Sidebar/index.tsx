"use client";
import React from "react";
import Item from "./Item";
import Collapse from "./Collapse";

export default function Sidebar({ items }: TSidebar) {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
      aria-label="Sidenav"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
  );
}
