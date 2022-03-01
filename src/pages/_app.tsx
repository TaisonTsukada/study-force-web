import '../styles/globals.css'
import React, { useState, useEffect, createContext } from "react"
import type { AppProps } from 'next/app'
import { User } from "lib/types/User"
import { useRouter } from 'next/router'
import DefaultTheme from 'styles/theme'
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles'
import { getCurrentUser } from 'lib/api/auth'
import CommonLayout from "components/layouts/CommonLayout"

export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()
  const router = useRouter()

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  useEffect(() => {
    if (!(isSignedIn || loading)) {
      router.push('/signin')
    }
  }, [isSignedIn, loading])



  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={DefaultTheme}>
        <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser}}>
          <CommonLayout>
            <Component {...pageProps} />
          </CommonLayout>
        </AuthContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
