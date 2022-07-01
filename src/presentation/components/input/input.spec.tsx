import React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "./input"
import { faker } from "@faker-js/faker"
import Context from "@/presentation/contexts/form/form-context"

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
}

describe("Input Component", () => {
  test("Should render Input component ", () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input).toBeTruthy()
  })
})
