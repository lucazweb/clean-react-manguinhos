import React, { useContext } from 'react'
import { ErrorDisplay, Wrapper } from './styled'
import Context from '@/presentation/contexts/form/form-context'

export const FormStatus = () => {
  const { state } = useContext(Context)

  return (
    <Wrapper data-testid="error-wrap">
      {state.mainError && (
        <ErrorDisplay data-testid="main-error">{state.mainError}</ErrorDisplay>
      )}
      {state.isLoading && <span data-testid="loader">Loading..</span>}
    </Wrapper>
  )
}
