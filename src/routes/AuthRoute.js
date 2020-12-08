import React from "react"
import {
  Route,
  Redirect,
} from "react-router-dom"

import { useSession } from "../stores/Session"

const RouteWrapper = ({
  path,
  exact,
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { profile } = useSession()
  const notAuthenticatedAndRouteIsPrivate = !profile && isPrivate
  const authenticatedAndRouteIsNotPrivate = profile && !isPrivate

  // in case there is no user on store and it tries to access a private route
  if (notAuthenticatedAndRouteIsPrivate)
    return <Redirect to="/sign" />

  // in case there is a user on store and it tries to access a public route
  if (authenticatedAndRouteIsNotPrivate) {
    return <Redirect to="/dashboard" />
  }
  
  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default RouteWrapper