import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { getMovements } from '../services/movementsService'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [movements, setMovements] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovements = async () => {
      // get all movements from db
      const movementsFromDB = await getMovements()
      setMovements(movementsFromDB)
    }

    fetchMovements()
  }, [])

  const handleChange = (value) => {
    if (value) {
      const navLink = value.toLowerCase().replace(/\s+/g, '')
      navigate(`/movements/${navLink}`)
    }
  }

  return (
    <Autocomplete
      defaultItems={movements}
      placeholder="Search a movement..."
      className="max-w-xs w-fit"
      size="sm"
      aria-label="Search a movement"
      onInputChange={(value) => handleChange(value)}
    >
      {(movement) => (
        <AutocompleteItem key={movement.name}>{movement.name}</AutocompleteItem>
      )}
    </Autocomplete>
  )
}

export default SearchBar
