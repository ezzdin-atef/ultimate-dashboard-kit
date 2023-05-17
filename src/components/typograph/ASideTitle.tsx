import React from "react";

export default function ASideTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl mr-3 font-semibold dark:text-white">{children}</h3>;
}
