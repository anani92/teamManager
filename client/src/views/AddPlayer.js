import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import PlayerForm from '../components/PlayerForm'
const AddPlayer = ({ players, setPlayers, errors, setErrors }) => {
  let navigate = useNavigate()

  const handleCreate = (player) => {
    axios
      .post('http://localhost:8000/players/new', player)
      .then((res) => {
        console.log(res)
        setPlayers([...players, res.data])
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div>
      <h2>new Player</h2>
      <Link to="/">Home</Link>

      <PlayerForm
        initialName=""
        onSubmitHandler={handleCreate}
        errors={errors}
      />
    </div>
  )
}

export default AddPlayer
