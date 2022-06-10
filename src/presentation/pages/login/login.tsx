import React from "react"
import { SignInHeader } from "@/presentation/components"
import { SignInForm } from "./form"

export default function Login() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignInHeader />
        <SignInForm />
      </div>
    </div>
  )
}
