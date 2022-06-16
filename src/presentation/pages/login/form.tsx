import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Input, Button, Label, FormStatus } from "@/presentation/components"
import { InputWrapper } from "./styled"
import Context from "@/presentation/contexts/form/form-context"

type SignInFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const SignInForm = (props: SignInFormProps) => {
  const { state } = useContext(Context)

  return (
    <form
      data-testid="form"
      className="mt-8 space-y-6"
      action="#"
      method="POST"
      onSubmit={props.handleSubmit}
    >
      <input type="hidden" name="remember" value="true" />
      <InputWrapper>
        <div>
          <Label hidden>Endereço de E-mail</Label>
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Insira o seu E-mail"
            hideErrorMessages
          />
        </div>
        <div>
          <Label hidden>Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Senha"
            hideErrorMessages
          />
        </div>
      </InputWrapper>
      <FormStatus />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Input id="remember-me" name="remember-me" className="" isCheckbox />
          <Label>Lembrar de mim</Label>
        </div>
        <div className="text-sm">
          <Link
            data-testid="signup"
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Criar conta
          </Link>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Esqueceu a senha?
          </a>
        </div>
      </div>

      <div>
        <Button
          data-testid="submit"
          disabled={!!state.emailError || !!state.passwordError}
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  )
}
