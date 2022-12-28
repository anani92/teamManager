import Main from './Main'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AddPlayer from './AddPlayer'
import ManagePlayers from './ManagePlayers'
import axios from 'axios'
const Container = () => {
  const [players, setPlayers] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/players')

      .then((res) => {
        setPlayers(res.data.allPlayers)
        setLoaded(true)
        console.log(res.data.allPlayers)
      })
      .catch((err) => console.log(err))
  }, [])
  const updateStatus = (status, id) => {
    axios
      .put(`http://localhost:8000/players/${id}/edit/`, {
        status,
      })
      .then((res) => {
        const playerIdx = players.findIndex((player) => player._id === id)
        const updatedPlayers = [
          ...players.slice(0, playerIdx),
          { ...players[playerIdx], status: status },
          ...players.slice(playerIdx + 1),
        ]

        
        setPlayers(updatedPlayers)
      })
  }
  if (loaded)
    return (
      <>
        <h1>player manager</h1>

        <Routes>
          <Route
            path="/"
            element={<Main players={players} setPlayers={setPlayers} />}
          />
          <Route
            path="/players/new"
            element={
              <AddPlayer
                players={players}
                setPlayers={setPlayers}
                errors={errors}
                setErrors={setErrors}
              />
            }
          />
          {console.log(players, 'hello')}

          <Route
            path="/players/manage"
            element={
              <ManagePlayers players={players} updateStatus={updateStatus} />
            }
          />
        </Routes>
      </>
    )
}

export default Container
