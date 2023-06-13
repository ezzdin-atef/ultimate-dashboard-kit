import clsx from "clsx";
import React from "react";

interface IColumnProps extends IBaseComponentProps {
  gap?: "none" | "sm" | "md" | "base" | "lg";
  align?: "center" | "start";
  justify?: "center" | "start";
}
export default function Column({ children, className, gap, align, justify }: IColumnProps) {
  return (
    <div
      className={clsx({
        "flex flex-col": true,
        "gap-0": gap === "none",
        "gap-2": gap === "sm",
        "gap-4": gap === "md",
        "gap-6": gap === "base" || !gap,
        "gap-8": gap === "lg",
        "items-center": align === "center",
        "items-start": align === "start",
        "justify-center": justify === "center",
        "justify-start": justify === "start",
        [className ?? ""]: className,
      })}
    >
      {children}
    </div>
  );
}
