import * as hook from '../hooks/useConsumables'

import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'

export default function EditForm() {
  const navigate = useNavigate()

  const mutation = hook.useEditMileage()

  const id = Number(useParams().id)

  const { data } = hook.useGetItemById(id)

  const [formState, setFormState] = useState({
    name: data?.name,
    replaced: '',
    tocheck: '',
    atMileage: data?.atMileage,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    const input = { ...formState, [name]: value }
    setFormState(input)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    console.log(formState)
    console.log(data)

    navigate('/')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        You can normally drive {data?.atMileage}km but we know it depends cars!
        <span>You can call it whatever you want!</span>
        <input
          onChange={handleChange}
          type="text"
          value={formState.name}
          id=""
          name="name"
          placeholder="which item?"
        />
        How far can you drive with this item?
        <input
          onChange={handleChange}
          type="number"
          value={formState.atMileage}
          id=""
          name="atMileage"
          placeholder={data?.atMileage || 0}
        />
        km
      </form>

      <button id={id} onClick={handleSubmit}>
        save
      </button>
    </>
  )
}
