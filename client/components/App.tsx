import { useConsumables } from '../hooks/useConsumables'
import DateInputForm from './DateInputForm'

function App() {
  const { data } = useConsumables()
  return (
    <>
      <div className="app">
        <h1>Car Consumables</h1>
        <ul>
          {data &&
            data.map((consumable) => (
              <li key={consumable.id}>
                {consumable.name} <DateInputForm />
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default App
