// users can add items their own

//tocheck part to fix to be calculated & mileage input n/a

import { FormEvent, useCallback, useState } from 'react'
import { ConsumablesData } from '../../models/consumables'

interface Props {
  onAdd: (data: ConsumablesData) => void
}

function AddItemForm(props: Props) {
  const { onAdd } = props

  const [formState, setFormState] = useState({
    name: '',
    replaced: '',
    tocheck: '',
    atMileage: 0,
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const addedItem = { ...formState }
    onAdd(addedItem)
  }
  return (
    <>
      added item
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={formState.name}
          id=""
          name="name"
        />
        <input
          onChange={handleChange}
          type="date"
          value={formState.replaced}
          id=""
          name="replaced"
        />
        <input
          onChange={handleChange}
          type="text"
          value={formState.tocheck}
          id=""
          name="tocheck"
        />
        <input
          onChange={handleChange}
          type="number"
          value={formState.atMileage}
          id=""
          name="atMilieage"
        />
        <button>Add Item</button>
      </form>
    </>
  )
}

export default AddItemForm
