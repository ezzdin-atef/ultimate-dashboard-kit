import clsx from "clsx";
import React from "react";

export default function Card({ children, className }: IBaseComponentProps) {
  return (
    <div
      className={clsx({
        "py-5 px-5 border bg-white rounded-lg": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </div>
  );
}
