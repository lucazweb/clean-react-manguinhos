import React from "react"
import { ErrorDisplay, Wrapper } from "./styled"

type Props = {
  isLoading: boolean
  error?: string
}

export const FormStatus = (props: Props) => {
  const willRender = props.error || props.isLoading
  return willRender ? (
    <Wrapper>
      {props.error && <ErrorDisplay> {props.error}</ErrorDisplay>}
      {props.isLoading && <span>Loading..</span>}
    </Wrapper>
  ) : null
}
