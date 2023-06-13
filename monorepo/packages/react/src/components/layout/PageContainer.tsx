import clsx from "clsx";
import React from "react";

interface IPageContainerProps extends IBaseComponentProps {
  bg?: "transparent" | "white";
}

export default function PageContainer({ children, bg }: IPageContainerProps) {
  return (
    <div
      className={clsx({
        "py-2 min-h-screen": true,
        "bg-white": bg === "white",
        "bg-transparent": bg === "transparent" || !bg,
      })}
    >
      <div className="mx-3">{children}</div>
    </div>
  );
}
