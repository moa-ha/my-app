import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      Home Page
      <Link to="/items">Consumable Items</Link>
      <Link to="/">Inspection</Link>
      <Link to="/ ">Service Center near me</Link>
    </>
  )
}
