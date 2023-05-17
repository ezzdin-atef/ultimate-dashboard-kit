import clsx from "clsx";
import React from "react";

interface TextareaInputProps {
  id: string;
  name?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  label?: string;
}

export default function TextareaInput(props: TextareaInputProps) {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </label>
      )}
      <textarea
        id={props.id}
        name={props.name ?? props.id}
        className={clsx({
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500":
            true,
          [props.className ?? ""]: true,
        })}
        placeholder={props.placeholder}
        value={props.value}
      ></textarea>
    </div>
  );
}
