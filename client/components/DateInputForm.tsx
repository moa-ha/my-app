//stretch: bring calendar form to select date
import { useState } from 'react'

function DateInputForm() {
  const [date, setDate] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value)
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDate('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="date"
          id=""
          value={date}
          placeholder="Tell us the date it's replaced!"
        ></input>
        <button>save</button>
      </form>
    </>
  )
}

export default DateInputForm
