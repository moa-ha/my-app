import { useConsumables } from '../hooks/useConsumables.ts'
import DateInputForm from './DateInputForm.tsx'

import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton.tsx'

function Items() {
  const { data } = useConsumables()
  return (
    <>
      <div className="app">
        <h1>WWW</h1>
        <div className="container">
          <ul>
            {data &&
              data.map((consumable) => (
                <li className="item" key={consumable.id}>
                  <Link to={`${consumable.id}`}>
                    <button className="button">Edit</button>
                  </Link>
                  <DeleteButton id={consumable.id} />
                  <br></br>
                  {consumable.name}
                  <DateInputForm id={consumable.id} />
                </li>
              ))}
          </ul>
          <Link to="/items/add">Add your item</Link>
        </div>
      </div>
    </>
  )
}

export default Items
