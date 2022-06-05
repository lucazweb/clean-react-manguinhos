import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../test/mock-http-client"

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", () => {
    const url = "any_url"
    const httpPostClientSpy = new HttpPostClientSpy()
    // sut: system under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
