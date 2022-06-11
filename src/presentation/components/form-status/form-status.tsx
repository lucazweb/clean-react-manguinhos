import React, { useContext } from "react"
import { ErrorDisplay, Wrapper } from "./styled"
import Context from "@/presentation/contexts/form/form-context"

export const FormStatus = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <Wrapper data-testid="error-wrap">
      {errorMessage && <ErrorDisplay> {errorMessage}</ErrorDisplay>}
      {isLoading && <span>Loading..</span>}
    </Wrapper>
  )
}
