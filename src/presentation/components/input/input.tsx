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
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`] || "Tudo certo!"

  const { isCheckbox, hideErrorMessages, ...restProps } = props

  const handleState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <React.Fragment>
      <input
        {...restProps}
        className={isCheckbox ? checkboxStyles : handleInputStyles(error)}
        type={isCheckbox ? "checkbox" : "text"}
        data-testid={props.name}
        onChange={handleState}
        value={state[props.name]}
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
