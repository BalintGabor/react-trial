import React, { useEffect, useState } from "react"
import Character from "./components/Character"
import LoadingMask from "./components/LoadingMask"

const App = () => {
  
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    const characters = async () => {
      const charactersResponse = await fetch("https://demoapi.com/api/series/howimetyourmother")
      const characterJson = await charactersResponse.json()
      setCharacters(characterJson)
    }
    characters()
  }, [])

  /*useEffect (() => {
    fetch("https://demoapi.com/api/series/howimetyourmother")
    .then(response => response.json())
    .then((data) => {
      setCharacters(data)
    })
  })*/

  return (
    <div>
      <h1>Series Api</h1>
      {characters ? <Character characters={characters}/> : <LoadingMask/>}
    </div>
  )
}

export default App
