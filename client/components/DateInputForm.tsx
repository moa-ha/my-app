// stretch: notice or alarm
// make it available to get user's average mileage per year and calculate accordingly

import { useState } from 'react'
import { useConsumables } from '../hooks/useConsumables'

interface Props {
  id: number
}

function DateInputForm({ id }: Props) {
  const { data } = useConsumables()
  const [date, setDate] = useState('')
  const [isShow, setIsShow] = useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('result: ' + formattedDate)
    setIsShow(true)
    // setDate('')
  }

  // NZ average mileage per year is 15000.
  const days = 365
  const average = 15000
  let mileage = 0
  const dateObject = new Date(date)

  function getPeriod(id: number) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          mileage = data[i].atMileage
          return Math.floor(Number((mileage / average) * days))
        }
      }
    }
  }

  // calculate each accordingly and make it dd/mm/yyyy
  const period = Number(getPeriod(id))
  const milSecPeriod = period * 24 * 60 * 60 * 1000
  const receivedDate = Number(dateObject.getTime())
  const returnedDate = new Date(receivedDate + milSecPeriod)
  const formattedDate = returnedDate.toLocaleDateString('en-GB')

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="datePicker"> Select a date: </label>
        <input
          onChange={handleChange}
          type="date"
          name="date"
          id="datePicker"
          value={date}
        />
        <button>save</button>
        <p>check on {isShow && <span>{formattedDate}</span>} </p>
      </form>
    </>
  )
}

export default DateInputForm
