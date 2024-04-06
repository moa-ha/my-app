import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <nav className="navbar">
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
  )
}
