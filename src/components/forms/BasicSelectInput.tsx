import clsx from "clsx";
import React from "react";

interface BasicSelectInputProps extends React.HTMLAttributes<HTMLSelectElement> {
  id: string;
  name?: string;
  className?: string;
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
}

export default function BasicSelectInput({ id, name, className, label, options, ...props }: BasicSelectInputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <select
        name={name ?? id}
        id={id}
        className={clsx({
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500":
            true,
          [className ?? ""]: true,
        })}
        {...props}
      >
        {options.map((el) => (
          <option key={el.value} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </div>
  );
}
