import { faker } from "@faker-js/faker"
import { FieldValidationSpy } from "../test/mock-field-validation"
import { ValidationComposite } from "./validation-composite"

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName),
  ]
  // const fieldValidationSpy2 = new FieldValidationSpy("any_field")
  const sut = new ValidationComposite(fieldValidationSpy)
  return {
    sut,
    fieldValidationsSpy: fieldValidationSpy,
  }
}

describe("ValidationComposite", () => {
  test("Should return error if any validation fails", () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationsSpy: fieldValidationSpy } = makeSut(fieldName)
    fieldValidationSpy[0].error = new Error("first_error_message")
    fieldValidationSpy[1].error = new Error("second_error_message")
    const error = sut.validate(fieldName, "any_value")
    expect(error).toBe("first_error_message")
  })

  test("Should return error if any validation fails", () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, "any_value")
    expect(error).toBeFalsy()
  })
})
