import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Players from '../components/Players'
import Button from '@mui/material/Button'

const Main = ({ players, setPlayers }) => {
  const removeFromDom = (playerId) => {
    setPlayers(players.filter((player) => player._id !== playerId))
  }

  return (
    <div>
      <Link to="/players/new">
        <Button variant="outlined" color="primary" disableElevation>
          Add new player
        </Button>
      </Link>
      <Players
        players={players}
        setPlayers={setPlayers}
        removeFromDom={removeFromDom}
      />
    </div>
  )
}

export default Main
