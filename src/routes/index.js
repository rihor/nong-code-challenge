import React from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import AuthRoute from "./AuthRoute"

// pages
import Sign from "../pages/Sign"
import Dashboard from "../pages/Dashboard"

export default function Routes() {
  return (
    <Switch>
      <AuthRoute path="/" exact component={Sign} />
      <AuthRoute path="/dashboard" component={Dashboard} isPrivate />

      <Route render={() => <Redirect to="/" />} />
    </Switch>
  )
}