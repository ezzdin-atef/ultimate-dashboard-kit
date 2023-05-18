import clsx from "clsx";
import React from "react";

export function HeadingL1({ children, className }: IBaseComponentProps) {
  return (
    <h1
      className={clsx({
        "text-3xl font-semibold mb-1 dark:text-white": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </h1>
  );
}

export function HeadingL2({ children, className }: IBaseComponentProps) {
  return (
    <h2
      className={clsx({
        "text-2xl font-semibold mb-1 dark:text-white": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </h2>
  );
}

export function HeadingL3({ children, className }: IBaseComponentProps) {
  return (
    <h3
      className={clsx({
        "text-xl font-semibold mb-1 dark:text-white": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </h3>
  );
}
export function HeadingL4({ children, className }: IBaseComponentProps) {
  return (
    <h4
      className={clsx({
        "text-lg font-semibold mb-1 dark:text-white": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </h4>
  );
}
export function HeadingL5({ children, className }: IBaseComponentProps) {
  return (
    <h5
      className={clsx({
        "text-base font-semibold mb-1 dark:text-white": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </h5>
  );
}

export function HeadingL6({ children, className }: IBaseComponentProps) {
  return (
    <h6
      className={clsx({
        "text-sm font-semibold mb-1 dark:text-white": true,
        [className ?? ""]: className,
      })}
    >
      {children}
    </h6>
  );
}
