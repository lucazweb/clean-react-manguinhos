import axios from "axios"
import { faker } from "@faker-js/faker"

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: { user: faker.name.firstName, role: faker.name.jobTitle() },
    status: 200,
  })
  return mockedAxios
}
