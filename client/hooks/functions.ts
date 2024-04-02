//save function in case it's used again

// NZ average mileage per year is 15000.
const days = 365
const average = 15000
let mileage
function getPeriod(mileage) {
  return Number(Math.floor(Number((mileage / average) * days)))
}

// calculate each accordingly and make it dd/mm/yyyy
function getReturnedDate() {
  let date
  const period = getPeriod(mileage)
  const dateObject = new Date(date)

  const milSecPeriod = period * 24 * 60 * 60 * 1000
  const receivedDate = Number(dateObject.getTime())
  const returnedDate = new Date(receivedDate + milSecPeriod)
  const formattedDate = returnedDate.toLocaleDateString('en-GB')
  return formattedDate
}
