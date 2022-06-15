import React, { useState, useEffect } from "react"
import { SignInHeader } from "@/presentation/components"
import { SignInForm } from "./form"
import Context from "@/presentation/contexts/form/form-context"
import { Validation } from "@/presentation/protocols/validation"

type Props = {
  validation: Validation
}

export default function Login({ validation }: Props) {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({
      ...state,
      isLoading: true,
    })
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
