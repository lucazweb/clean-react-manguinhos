import React, { useState } from "react"
import { SignInHeader } from "@/presentation/components"
import { SignInForm } from "./form"
import Context from "@/presentation/contexts/form/form-context"

export default function Login() {
  const [state] = useState({
    isLoading: false,
  })

  const [errorState] = useState({
    email: "Campo obrigatório",
    password: "Campo obrigatório",
    main: "",
  })

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignInHeader />
        <Context.Provider value={{ state, errorState }}>
          <SignInForm />
        </Context.Provider>
      </div>
    </div>
  )
}
