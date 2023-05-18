import clsx from "clsx";
import React from "react";

interface IGridProps extends IBaseComponentProps {
  nCol: number;
  gap?: "none" | "sm" | "md" | "base" | "lg";
}

export default function Grid({ children, nCol, gap }: IGridProps) {
  return (
    <div
      className={clsx({
        grid: true,
        "grid-cols-2": nCol === 2,
        "grid-cols-3": nCol === 3,
        "grid-cols-4": nCol === 4,
        "grid-cols-5": nCol === 5,
        "grid-cols-6": nCol === 6,
        "gap-0": gap === "none",
        "gap-2": gap === "sm",
        "gap-4": gap === "md",
        "gap-6": gap === "base" || !gap,
        "gap-8": gap === "lg",
      })}
    >
      {children}
    </div>
  );
}
