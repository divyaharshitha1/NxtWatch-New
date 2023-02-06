import {Redirect, Route} from 'react'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {
  const jwtToken = Cookie.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
