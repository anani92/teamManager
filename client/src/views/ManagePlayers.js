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
import Typography from '@mui/material/Typography'

const ManagePlayers = ({ players, updateStatus }) => {
  return (
    <div>
      <h2>Players Status</h2>
      <Paper sx={{ width: '75%', overflow: 'hidden', marginLeft: '2rem' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  key="players"
                  align="right"
                  style={{ minWidth: 170 }}
                >
                  Team name
                </TableCell>
                <TableCell
                  key="players"
                  align="right"
                  style={{ minWidth: 170 }}
                >
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
                  <TableCell align={'right'}>
                    <button
                      style={
                        player.status === 'playing'
                          ? { color: 'green' }
                          : { color: 'white' }
                      }
                      onClick={(e) => {
                        updateStatus('playing', player._id)
                      }}
                    >
                      Playing
                    </button>

                    <button
                      style={
                        player.status === 'notPlaying'
                          ? { color: 'red' }
                          : { color: 'white' }
                      }
                      onClick={(e) => {
                        updateStatus('notPlaying', player._id)
                      }}
                    >
                      Not playing
                    </button>

                    <button
                      style={
                        player.status === 'undecided'
                          ? { color: 'yellow' }
                          : { color: 'white' }
                      }
                      disableElevation
                      onClick={(e) => {
                        updateStatus('undecided', player._id)
                        console.log(player.status)
                      }}
                    >
                      Undecided
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default ManagePlayers
