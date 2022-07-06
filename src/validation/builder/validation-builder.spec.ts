import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation
} from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import { faker } from '@faker-js/faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('Should return MinLenghtValidation', () => {
    const field = faker.database.column()
    const length = 5
    const validations = sut.field(field).min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', length)])
  })

  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = 5
    const validations = sut.field('any_field').required().min(5).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field)
    ])
  })
})
