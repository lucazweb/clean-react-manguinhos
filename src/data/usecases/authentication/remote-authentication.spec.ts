import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../test/mock-http-client"

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}
const makeSut = (url: string = ""): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  // sut: system under test
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy,
  }
}

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", () => {
    const url = "any_url"
    const { sut, httpPostClientSpy } = makeSut(url)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
