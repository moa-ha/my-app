import { useConsumables } from '../hooks/useConsumables'
import DateInputForm from './DateInputForm'

import { Link } from 'react-router-dom'
import EditForm from './EditForm.tsx'

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
                {consumable.name}
                <Link to="/delete">delete</Link>
                <DateInputForm id={consumable.id} />
              </li>
            ))}
        </ul>
        <Link to="/add">Add your item</Link>
      </div>
    </>
  )
}

export default App
