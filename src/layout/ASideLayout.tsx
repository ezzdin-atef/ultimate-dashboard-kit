import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { SIDEBAR_ITEMS } from "@/constant/SIDEBAR";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import clsx from "clsx";

export default function ASideLayout({ children }: { children: React.ReactNode }) {
  const isCollapsed = useSelector((state: RootState) => state.sidebar.isCollapsed);

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <TopNav />
      <Sidebar items={SIDEBAR_ITEMS} />
      <div
        className={clsx({ "pt-16 min-h-screen flex-grow": true, "md:pl-64": !isCollapsed, "md:pl-16": isCollapsed })}
      >
        {children}
      </div>
    </div>
  );
}
