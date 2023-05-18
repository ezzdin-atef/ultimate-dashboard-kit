import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import { SIDEBAR_ITEMS } from "@/constant/SIDEBAR";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

export default function ASideLayout() {
  const isCollapsed = useSelector((state: RootState) => state.sidebar.isCollapsed);

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <TopNav />
      <Sidebar items={SIDEBAR_ITEMS} />
      <div
        className={clsx({ "pt-16 min-h-screen flex-grow": true, "md:pl-64": !isCollapsed, "md:pl-16": isCollapsed })}
      >
        <Outlet />
      </div>
    </div>
  );
}
