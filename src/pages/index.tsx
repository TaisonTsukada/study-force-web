import type { NextPage } from 'next'
import React, { useContext } from "react"
import { AuthContext } from "pages/_app"

const Home: NextPage = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext)
  return (
    <>
      {
        isSignedIn && currentUser ? (
          <>
            <h1>Signed in successfully!</h1>
            <h2>Email: {currentUser?.email}</h2>
            <h2>Name: {currentUser?.name}</h2>
          </>
        ) : (
          <h1>Not signed in</h1>
        )
      }
    </>
  )
}

export default Home
