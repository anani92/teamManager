import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const PlayerForm = (props) => {
  const { initialName, errors } = props
  const [name, setName] = useState(initialName)
  const [status, setStatus] = useState('undecided')
  const [position, setPosition] = useState('')

  const formHandler = (e) => {
    e.preventDefault()
    props.onSubmitHandler({ name, position, status })
    console.log(name)
  }

  return (
    <form action="" onSubmit={formHandler}>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}

      <p>
        Name:{' '}
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        Prefered position:{' '}
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          value={position}
          name="position"
          onChange={(e) => setPosition(e.target.value)}
        />
      </p>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        type="submit"
        value="submit"
      >
        submit{' '}
      </Button>
    </form>
  )
}

export default PlayerForm
