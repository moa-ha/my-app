import { useConsumables } from '../hooks/useConsumables'
import DateInputForm from './DateInputForm'

import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton.tsx'
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
                <Link to={`${consumable.id}`}>
                  <button>Edit</button>
                </Link>
                <DeleteButton id={consumable.id} />
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
