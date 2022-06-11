import React, { useContext } from "react"
import Context from "@/presentation/contexts/form/form-context"
import { checkboxStyles, handleInputStyles } from "./styles"

export interface InputProps
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "id" | "name" | "type" | "autoComplete" | "className" | "placeholder"
  > {
  isCheckbox?: boolean
  hideErrorMessages?: boolean
}

export const Input = (props: InputProps) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const { isCheckbox, hideErrorMessages, ...restProps } = props

  return (
    <React.Fragment>
      <input
        {...restProps}
        className={isCheckbox ? checkboxStyles : handleInputStyles(error)}
        type={isCheckbox ? "checkbox" : "text"}
      />
      {!isCheckbox && (
        <p
          title={error}
          data-testid={`${props.name}-status`}
          className={`text-red-500 text-xs italic ${
            hideErrorMessages && "hidden"
          }`}
        >
          {error}
        </p>
      )}
    </React.Fragment>
  )
}
