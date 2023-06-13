import clsx from "clsx";
import React from "react";

interface TextareaInputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name?: string;
  className?: string;
  placeholder?: string;
  label?: string;
}

export default function TextareaInput({
  id,
  name,
  className,
  placeholder,
  label,
  children,
  ...props
}: TextareaInputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name ?? id}
        className={clsx({
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500":
            true,
          [className ?? ""]: true,
        })}
        placeholder={placeholder}
        {...props}
      >
        {children}
      </textarea>
    </div>
  );
}
