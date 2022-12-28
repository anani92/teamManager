import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Players = (props) => {
  const { removeFromDom, players, setplayers } = props

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/players/${id}/delete`)
      .then((res) => {
        removeFromDom(id)
      })
      .catch((err) => console.log(err))
  }
  return (
    <Paper sx={{ width: '75%', overflow: 'hidden', marginLeft: '2rem' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key="players" align="right" style={{ minWidth: 170 }}>
                Team name
              </TableCell>
              <TableCell key="players" align="right" style={{ minWidth: 170 }}>
                Prefered position
              </TableCell>
              <TableCell key="players" align="right" style={{ minWidth: 170 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, i) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                <TableCell align={'right'}>
                  <Link to={'/players/' + player._id}>
                    <Typography mt={2}>{player.name}</Typography>
                  </Link>
                </TableCell>
                <TableCell align={'right'}>{player.position}</TableCell>
                <TableCell align={'right'}>
                  <Button
                    variant="outlined"
                    color="error"
                    disableElevation
                    onClick={(e) => {
                      handleDelete(player._id)
                    }}
                  >
                    {' '}
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Players
