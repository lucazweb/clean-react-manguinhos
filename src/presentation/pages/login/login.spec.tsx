import React from "react"
import {
  render,
  RenderResult,
  cleanup,
  fireEvent,
} from "@testing-library/react"
import Login from "./login"
import { ValidationStub } from "@/presentation/test/mock-validation"
import { faker } from "@faker-js/faker"

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = faker.random.words()
  const sut = render(<Login validation={validationStub} />)
  return {
    sut,
    validationStub,
  }
}

describe("Login Component", () => {
  afterEach(cleanup)

  test("Should start with initial state ", () => {
    const { sut, validationStub } = makeSut()
    const errorWrap = sut.getByTestId("error-wrap")
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId("submit") as HTMLButtonElement // this cast allow get button props and not getByTestId return
    expect(submitButton.disabled).toBe(true)
    const emailStatus = sut.getByTestId("email-status")
    expect(emailStatus.title).toBe(validationStub.errorMessage)
    const passwordStatus = sut.getByTestId("password-status")
    expect(passwordStatus.title).toBe("Campo obrigatório")
  })

  test("Should call Validation with correct email ", () => {
    const { sut, validationStub } = makeSut()
    const emailInput = sut.getByTestId("email")
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    expect(validationStub.fieldName).toBe("email")
    expect(validationStub.fieldValue).toBe(email)
  })

  test("Should call Validation with correct password ", () => {
    const { sut, validationStub } = makeSut()
    const passwordInput = sut.getByTestId("password")
    const password = faker.internet.password()
    fireEvent.input(passwordInput, { target: { value: password } })
    expect(validationStub.fieldName).toBe("password")
    expect(validationStub.fieldValue).toBe(password)
  })

  test("Should show email error if validation fails ", () => {
    const { sut, validationStub } = makeSut()
    const emailInput = sut.getByTestId("email")
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId("email-status")
    expect(emailStatus.title).toBe(validationStub.errorMessage)
    expect(emailStatus.textContent).toBe(validationStub.errorMessage)
  })
})
