import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { SIDEBAR_ITEMS } from "@/constant/SIDEBAR";

export default function ASideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <TopNav />
      <Sidebar items={SIDEBAR_ITEMS} />
      <div className="md:pl-64 pt-16 min-h-screen flex-grow">{children}</div>
    </div>
  );
}
