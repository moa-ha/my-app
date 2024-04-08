// TODO: import useAuth0 function
import { useAuth0 } from '@auth0/auth0-react'
const useIsAuthenticated = () => {
  // TODO: call the useAuth0 hook, destructure and return isAuthenticated
  const auth = useAuth0()
  return auth.isAuthenticated
}
interface Props {
  children: React.ReactNode
}
export function IfAuthenticated(props: Props) {
  const { children } = props
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated(props: Props) {
  const { children } = props
  return !useIsAuthenticated() ? <>{children}</> : null
}
