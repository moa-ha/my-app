//stretch: if user could put only the item and the form can complete the rest keyword to google

import { useState } from 'react'

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value)
  }

  // Show google search result
  const searchOnGoogle = () => {
    const encodedQuery = encodeURIComponent(searchQuery)
    const googleSearchUrl = `https://www.google.com/search?q=${encodedQuery}`
    window.open(googleSearchUrl, '_blank')
    setSearchQuery('')
  }

  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        value={searchQuery}
        name="name"
        placeholder="Find out how many miles you could drive with this!"
      />
      <button onClick={searchOnGoogle}>Go to Google result</button>
    </>
  )
}

export default SearchBar
