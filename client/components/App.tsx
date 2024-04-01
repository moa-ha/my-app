import { useConsumables } from '../hooks/useConsumables'
import DateInputForm from './DateInputForm'

import { Link } from 'react-router-dom'

function App() {
  const { data } = useConsumables()
  return (
    <>
      <div className="app">
        <h1>WWW</h1>
        <ul>
          {data &&
            data.map((consumable) => (
              <li key={consumable.id}>
                {consumable.name} <DateInputForm id={consumable.id} />
              </li>
            ))}
        </ul>
        <Link to="/add">Add your item</Link>
      </div>
    </>
  )
}

export default App
