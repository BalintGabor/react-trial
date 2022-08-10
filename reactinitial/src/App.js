import React, { useEffect, useState } from "react"
import Character from "./components/Character"
import LoadingMask from "./components/LoadingMask"
import Subscription from "./components/Subscription"


const App = () => {
  
  const [characters, setCharacters] = useState(null)
  const [delayedComponent, setDelayedComponent] = useState(false)

  useEffect(() => {
    const characters = async () => {
      const charactersResponse = await fetch("https://demoapi.com/api/series/howimetyourmother")
      const characterJson = await charactersResponse.json()
      setCharacters(characterJson)
    }
    characters()
  }, [])

  useEffect(() => {
    setInterval(() => {
      setDelayedComponent(true)
    }, 10000);
  })

  /*useEffect (() => {
    fetch("https://demoapi.com/api/series/howimetyourmother")
    .then(response => response.json())
    .then((data) => {
      setCharacters(data)
    })
  })*/
  
  const pull_data = (data) => {
      if (data !== "") {
        setTimeout(() => {
          setDelayedComponent(false)
        }, 5000)
      }
  }

  return (
    <div>
      <h1>Series Api</h1>
      {characters ? characters.map((character, index) => <Character key={index} name={character.name} details={character.details}/>) : <LoadingMask/>}
      {delayedComponent && <Subscription func={pull_data}/>}
    </div>
  )
}

export default App
