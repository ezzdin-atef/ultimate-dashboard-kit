import clsx from "clsx";
import React from "react";

interface IRowProps extends IBaseComponentProps {
  gap?: "none" | "sm" | "md" | "base" | "lg";
  align?: "center";
  justify?: "center";
}

export default function Row({ children, gap, align, justify, className }: IRowProps) {
  return (
    <div
      className={clsx({
        "flex flex-row": true,
        "gap-0": gap === "none",
        "gap-2": gap === "sm",
        "gap-4": gap === "md",
        "gap-6": gap === "base" || !gap,
        "gap-8": gap === "lg",
        "items-center": align === "center",
        "justify-center": justify === "center",
        [className ?? ""]: className,
      })}
    >
      {children}
    </div>
  );
}
