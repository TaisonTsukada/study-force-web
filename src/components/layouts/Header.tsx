import React, { useContext } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from "js-cookie"

import { makeStyles } from "@mui/styles"
import {AppBar, Theme, Toolbar, Typography, Button, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import { signOut } from "lib/api/auth"

import { AuthContext } from "pages/_app"

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit"
  },
  linkBtn: {
    textTransform: "none"
  }
}))

const Header: React.VFC = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext)
  const classes = useStyles()
  const router = useRouter()

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)
        router.push("/signin")

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const AuthButtons = () => {
    // 認証完了後はサインアウト用のボタンを表示
    // 未認証時は認証用のボタンを表示
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button
            color="inherit"
            className={classes.linkBtn}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        )
      } else {
        return (
          <>
            <Button
              // component={Link}
              href="/signin"
              color="inherit"
              className={classes.linkBtn}
            >
              Sign in
            </Button>
            <Button
              // component={Link}
              href="/signup"
              color="inherit"
              className={classes.linkBtn}
            >
              Sign Up
            </Button>
          </>
        )
      }
    } else {
      return <></>
    }
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            href="/"
            variant="h6"
            className={classes.title}
          >
            Sample
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
