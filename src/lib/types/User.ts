// サインアップ
export interface SignUpParams {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

// サインイン
export interface SignInParams {
  email: string
  password: string
}

// ユーザー
export interface User {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  image?: string
  allowPasswordChange: boolean
  created_at: Date
  updated_at: Date
}

// graph

// type UserInformation = {
//   name: string
//   user_id: string
// }

// type UserSession = {
//   information: UserInformation
//   token: UserToken
// }

// type AuthUser = {
//   user: UserInformation
// } & UserToken

// type UserToken = {
//   access_token: string
//   token_type: string
//   expiry: number
//   client: string
//   uid: string
// }

// type RefreshToken = {
//   access_token: string
//   expiry: number
//   token_type: string
//   client: string
//   uid: string
// }

// export type { UserInformation, AuthUser, UserSession, UserToken, RefreshToken }
