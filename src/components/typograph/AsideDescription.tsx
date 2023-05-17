import React from "react";

export default function AsideDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-500 dark:text-gray-400">{children}</p>;
}
