import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const auth = useAuth0()
  // TODO: replace placeholder user object with the one from auth0
  const user = {
    nickname: auth.user,
  }
  console.log(user)

  const handleSignOut = () => {
    console.log('sign out')
    return auth.logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    const { loginWithRedirect } = auth
    return loginWithRedirect()
  }
  return (
    <>
      <nav className="navbar">
        <p className="right">
          <IfAuthenticated>
            <button className="button" onClick={handleSignOut}>
              Sign out
            </button>
            {user && <p>Signed in as: {user.nickname && user.nickname.name}</p>}
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button className="button" onClick={handleSignIn}>
              Sign in
            </button>
          </IfNotAuthenticated>
          <br></br>
          Save your maintenance info by signing in
        </p>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Inspection
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/items" className="navbar-link">
              Consumables
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Service Center near me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
