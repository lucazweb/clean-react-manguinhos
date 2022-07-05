import { AccountModel } from "../models/account-model"

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (credentials: AuthenticationParams) => Promise<AccountModel>
}
