import * as hook from '../hooks/useConsumables'

import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'

export default function EditForm() {
  const navigate = useNavigate()

  const mutation = hook.useEditMileage()

  const id = Number(useParams().id)

  const { data } = hook.useGetItemById(id)

  const [formState, setFormState] = useState({
    id: id,
    data: {
      name: data?.name,
      replaced: '',
      tocheck: '',
      atMileage: data?.atMileage,
    },
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    const input = {
      name: data?.name,
      replaced: '',
      tocheck: '',
      atMileage: data?.atMileage,
    }
    setFormState({ id, data: { ...input, [name]: value } })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)

    navigate('/')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        You can normally drive {data?.atMileage}km but we know it depends cars!
        How far can you drive with this item?
        <input
          onChange={handleChange}
          type="number"
          value={formState.data.atMileage}
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
