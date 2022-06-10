import React from "react"
import { Input, Button, Label, FormStatus } from "@/presentation/components"
import { InputWrapper } from "./styled"

export const SignInForm = () => {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
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
          />
        </div>
      </InputWrapper>
      <FormStatus isLoading={false} />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Input id="remember-me" name="remember-me" isCheckbox className="" />
          <Label>Lembrar de mim</Label>
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
        <Button type="submit">Login</Button>
      </div>
    </form>
  )
}
