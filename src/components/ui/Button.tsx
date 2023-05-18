import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "base" | "lg";
  color?: "default" | "light" | "dark" | "green" | "red" | "yellow" | "purple";
  outline?: boolean;
}

export default function Button({ children, className, size, color, outline, ...props }: ButtonProps) {
  return (
    <button
      className={clsx({
        "focus:ring-4 font-medium rounded-lg focus:outline-none": true,
        "text-sm px-3 py-2": size === "sm",
        "text-sm px-5 py-2.5": size === "base" || !size,
        "text-base px-5 py-3": size === "lg",
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":
          color === "default" || !color,
        "text-gray-900 bg-white border border-gray-300 focus:ring-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700":
          color === "light",
        "text-white bg-gray-800 border hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700":
          color === "dark",
        "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800":
          color === "green",
        "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":
          color === "red",
        "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900":
          color === "yellow",
        [className ?? ""]: className,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
