import React, { useState, useEffect } from "react"
import { SignInHeader } from "@/presentation/components"
import { SignInForm } from "./form"
import Context from "@/presentation/contexts/form/form-context"
import { Validation } from "@/presentation/protocols/validation"
import { Authentication } from "@/domain/usecases"

type Props = {
  validation: Validation
  authentication: Authentication
}

export default function Login({ validation, authentication }: Props) {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    mainError: "",
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate("email", state.email),
      passwordError: validation.validate("password", state.password),
    })
  }, [state.email, state.password])

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    if (state.isLoading || state.emailError || state.passwordError) {
      return
    }
    setState({
      ...state,
      isLoading: true,
    })
    await authentication.auth({ email: state.email, password: state.password })
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignInHeader />
        <Context.Provider value={{ state, setState }}>
          <SignInForm handleSubmit={handleSubmit} />
        </Context.Provider>
      </div>
    </div>
  )
}
