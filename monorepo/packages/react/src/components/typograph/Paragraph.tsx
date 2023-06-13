import clsx from "clsx";
import React from "react";

export default function Paragraph({ children, className }: IBaseComponentProps) {
  return (
    <p
      className={clsx({
        "text-gray-500 dark:text-gray-400": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </p>
  );
}
