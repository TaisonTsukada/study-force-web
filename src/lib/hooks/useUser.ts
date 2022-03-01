import { useCallback, useMemo, useState } from 'react'
import {
  changePassword as changePasswordAPI,
  ChangePasswordArgs,
  confirmForgotPassword as confirmForgotPasswordAPI,
  ConfirmForgotPasswordArgs,
  confirmUser as confirmUserAPI,
  ConfirmUserArgs,
  forgotPassword as forgotPasswordAPI,
  ForgotPasswordArgs,
  signIn as signInAPI,
  SignInArgs,
  signOut as signOutAPI,
  signUp as signUpAPI,
  SignUpArgs,
} from '../api'
import { UserInformation } from '../types'
import { clearSession, getSession, setSession } from '../utils/session'
import { useAxios } from './'

const useUser = () => {
  const [user, setUser] = useState<UserInformation | null>(() => {
    const session = getSession()
    if (session) {
      return session.information
    }
    return null
  })

  const axiosInstance = useAxios()

  const signUp = useCallback(
    async ({ username, password }: SignUpArgs) => {
      await signUpAPI({ axiosInstance, username, password })
    },
    [axiosInstance],
  )

  const confirmUser = useCallback(
    async ({ username, confirmationCode }: ConfirmUserArgs) => {
      await confirmUserAPI({ axiosInstance, username, confirmationCode })
    },
    [axiosInstance],
  )

  const signIn = useCallback(
    async ({ username, password }: SignInArgs) => {
      const res = await signInAPI({ axiosInstance, username, password })
      const { user: userData, access_token, expires_in, refresh_token, token_type } = res.data
      setUser(userData)
      setSession({
        information: userData,
        token: { access_token, expires_in, refresh_token, token_type },
      })
    },
    [axiosInstance],
  )

  const signOut = useCallback(async () => {
    await signOutAPI(axiosInstance)
    setUser(null)
    clearSession()
  }, [axiosInstance])

  const changePassword = useCallback(
    async ({ previous_password, proposed_password }: ChangePasswordArgs) => {
      await changePasswordAPI({ axiosInstance, previous_password, proposed_password })
      setUser(null)
      clearSession()
    },
    [axiosInstance],
  )

  const forgotPassword = useCallback(
    async ({ username }: ForgotPasswordArgs) => {
      await forgotPasswordAPI({ axiosInstance, username })
    },
    [axiosInstance],
  )

  const confirmForgotPassword = useCallback(
    async ({ username, confirmationCode, password }: ConfirmForgotPasswordArgs) => {
      await confirmForgotPasswordAPI({ axiosInstance, username, confirmationCode, password })
    },
    [axiosInstance],
  )

  const tagManagerArgs = useCallback(
    (page: string) => ({
      dataLayer: {
        userId: user?.user_id,
        groupId: user?.group_id,
        companyId: user?.company_id,
        userProject: 'graphapp',
        page: page,
      },
      dataLayerName: 'PageDataLayer',
    }),
    [user],
  )

  const values = useMemo(
    () => ({
      ...user,
      signUp,
      confirmUser,
      signIn,
      signOut,
      changePassword,
      forgotPassword,
      confirmForgotPassword,
      tagManagerArgs,
    }),
    [
      changePassword,
      forgotPassword,
      confirmForgotPassword,
      confirmUser,
      signIn,
      signOut,
      signUp,
      user,
      tagManagerArgs,
    ],
  )

  return values
}

export { useUser }
