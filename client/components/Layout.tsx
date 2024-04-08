import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <header>
        <h1>GP for your CAR</h1>
      </header>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
