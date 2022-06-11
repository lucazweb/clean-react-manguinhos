import React, { useContext } from "react"
import { ErrorDisplay, Wrapper } from "./styled"
import Context from "@/presentation/contexts/form/form-context"

export const FormStatus = () => {
  const { state, errorState } = useContext(Context)

  return (
    <Wrapper data-testid="error-wrap">
      {errorState.main && <ErrorDisplay> {errorState.main}</ErrorDisplay>}
      {state.isLoading && <span>Loading..</span>}
    </Wrapper>
  )
}
