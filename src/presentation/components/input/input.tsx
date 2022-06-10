import React from "react"

export interface InputProps
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "id" | "name" | "type" | "autoComplete" | "className" | "placeholder"
  > {
  isCheckbox?: boolean
}

const inputTWClasses =
  "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

const checkboxTwClasses =
  "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={props.isCheckbox ? checkboxTwClasses : inputTWClasses}
      type={props.isCheckbox ? "checkbox" : "text"}
    />
  )
}
