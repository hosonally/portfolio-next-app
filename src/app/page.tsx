'use client'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Home() {
  const [message, setMessage] = useState('')
  const [person, setPerson] = useState('')

  const handleOnChangePerson = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(event.target.value)
  }

  const handleClick = async () => {
    try {
      const res = await fetch(`/api/hello?person=${encodeURIComponent(person)}`)
      const data = await res.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Error fetching message:', error)
      setMessage('Unable to find your path to the success.')
    }
  }

  return (
    <>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleOnChangePerson}
        />
      </Box>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Fetch Message
        </button>
        <div className="mt-4 text-lg">{message}</div>
      </main>
    </>
  )
}
