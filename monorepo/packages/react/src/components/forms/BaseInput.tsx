import clsx from "clsx";
import React from "react";

interface BaseInputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  label?: string;
}

export default function BaseInput({ id, name, type, className, placeholder, label, ...props }: BaseInputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <input
        type={type ?? "text"}
        id={id}
        name={name ?? id}
        className={clsx({
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500":
            true,
          [className ?? ""]: true,
        })}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
