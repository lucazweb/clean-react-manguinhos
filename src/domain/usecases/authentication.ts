import { AccountModel } from "../models/account-model"

type Credentials = {
  email: string
  password: string
}

export interface Authentication {
  auth(credentials: Credentials): Promise<AccountModel>
}
