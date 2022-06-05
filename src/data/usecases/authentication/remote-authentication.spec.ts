import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClient } from "../../protocols/http/http-post-client"

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        await Promise.resolve()
      }
    }

    const url = "any_url"
    const httpPostClientSpy = new HttpPostClientSpy()
    // sut: system under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
