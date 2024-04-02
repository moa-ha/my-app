// users can add items their own

//tocheck part to fix to be calculated & mileage input n/a

import { FormEvent, useState } from 'react'
import { ConsumablesData } from '../../models/consumables'
import { useAddItem } from '../hooks/useConsumables'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import React from 'react'

function AddItemForm() {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    name: '',
    replaced: '',
    tocheck: '',
    atMileage: 0,
  })
  const mutation = useAddItem()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    const info = { ...formState, [name]: value }
    setFormState(info)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formState)
    mutation.mutate(formState)
    navigate('/')
  }
  return (
    <>
      Add Item
      <form onSubmit={handleSubmit}>
        Item
        <input
          onChange={handleChange}
          type="text"
          value={formState.name}
          id=""
          name="name"
        />
        <br></br>
        Replaced on{' '}
        <input
          onChange={handleChange}
          type="date"
          value={formState.replaced}
          id=""
          name="replaced"
        />
        <br></br>
        How many miles can you drive with this? Search if you don't know
        <input
          onChange={handleChange}
          type="number"
          value={formState.atMileage}
          id=""
          name="atMileage"
        />
        <br></br>
        <button>Add Item</button>
      </form>
      <br></br>
      <SearchBar />
      <br></br>
      Check it on
      <input
        onChange={handleChange}
        type="text"
        value={formState.tocheck}
        id=""
        name="tocheck"
      />
    </>
  )
}

export default AddItemForm
