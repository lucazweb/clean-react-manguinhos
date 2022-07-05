import React, { ReactNode } from "react"

export interface LabelProps
  extends React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
  > {
  children?: ReactNode
  hidden?: boolean
}

export const labelTwStyles = "ml-2 block text-sm text-gray-900"
export const srOnlyStylesTw = "sr-only"

export const Label = (props: LabelProps) => {
  return (
    <label {...props} className={props.hidden ? srOnlyStylesTw : labelTwStyles}>
      {props.children}
    </label>
  )
}
