import React from "react"
import Axios from "axios"

const Search = props => {
  const [searchValue, setSearchValue] = React.useState("")

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = e => {
    e.preventDefault()
    Axios.get("https://haunted-moonlight-21086.herokuapp.com/search", {
      name: searchValue
    })
      .then(response => console.log(response))
      .catch(error => console.log("callSearchFunction error", error))
    resetInputField()
  }

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search for a realtor..."
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  )
}

export default Search
