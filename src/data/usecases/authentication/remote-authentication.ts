import { HttpPostClient } from "../../protocols/http/http-post-client"

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    return this.httpPostClient.post(this.url)
  }
}
