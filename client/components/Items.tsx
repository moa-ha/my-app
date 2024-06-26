import { useConsumables } from '../hooks/useConsumables.ts'
import DateInputForm from './DateInputForm.tsx'

import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton.tsx'

function Items() {
  const { data } = useConsumables()
  return (
    <>
      <div className="app">
        <h2>
          Consumable Items
          <Link to="/items/add">
            <button className="button right">Add your item</button>
          </Link>
        </h2>
        <div className="container">
          <ul>
            {data &&
              data.map((consumable) => (
                <li key={consumable.id}>
                  <Link to={`${consumable.id}`}>
                    <button className="button right">Edit</button>
                  </Link>
                  <DeleteButton id={consumable.id} />
                  <br></br>
                  {consumable.name}
                  <DateInputForm id={consumable.id} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Items
