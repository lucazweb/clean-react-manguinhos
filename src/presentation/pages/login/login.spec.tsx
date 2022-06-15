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
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(<Login validation={validationStub} />)
  return {
    sut,
  }
}

describe("Login Component", () => {
  afterEach(cleanup)

  test("Should start with initial state ", () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const errorWrap = sut.getByTestId("error-wrap")
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId("submit") as HTMLButtonElement // this cast allow get button props and not getByTestId return
    expect(submitButton.disabled).toBe(true)
    const emailStatus = sut.getByTestId("email-status")
    expect(emailStatus.title).toBe(validationError)
    const passwordStatus = sut.getByTestId("password-status")
    expect(passwordStatus.title).toBe(validationError)
  })

  test("Should show email error if validation fails ", () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const emailInput = sut.getByTestId("email")
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId("email-status")
    expect(emailStatus.title).toBe(validationError)
    expect(emailStatus.textContent).toBe(validationError)
  })

  test("Should show password error if validation fails ", () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const passwordInput = sut.getByTestId("password")
    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    })
    const passwordStatus = sut.getByTestId("password-status")
    expect(passwordStatus.title).toBe(validationError)
    expect(passwordStatus.textContent).toBe(validationError)
  })

  test("Should show valid email state if validation succeeds ", () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId("email")
    fireEvent.input(emailInput, {
      target: { value: faker.internet.password() },
    })
    const emailStatus = sut.getByTestId("email-status")
    expect(emailStatus.title).toBe("Tudo certo!")
    expect(emailStatus.textContent).toBe("Tudo certo!")
  })

  test("Should show valid password state if validation succeeds ", () => {
    const { sut } = makeSut()
    const passwordInput = sut.getByTestId("password")
    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    })
    const passwordStatus = sut.getByTestId("password-status")
    expect(passwordStatus.title).toBe("Tudo certo!")
    expect(passwordStatus.textContent).toBe("Tudo certo!")
  })

  test("Should enable submit button if form is valid ", () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId("email")
    fireEvent.input(emailInput, {
      target: { value: faker.internet.email() },
    })
    const passwordInput = sut.getByTestId("password")
    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    })
    const submitButton = sut.getByTestId("submit") as HTMLButtonElement // this cast allow get button props and not getByTestId return
    expect(submitButton.disabled).toBe(false)
  })

  test("Should show loader on submit ", () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId("email")
    fireEvent.input(emailInput, {
      target: { value: faker.internet.email() },
    })
    const passwordInput = sut.getByTestId("password")
    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    })
    const submitButton = sut.getByTestId("submit")
    fireEvent.click(submitButton)
    const loader = sut.getByTestId("loader")
    expect(loader).toBeTruthy()
  })
})
