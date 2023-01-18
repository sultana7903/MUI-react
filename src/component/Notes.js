import React,{useEffect,useState} from 'react'
import {Grid} from '@mui/material'
import {Paper} from '@mui/material'
import { Container } from '@mui/system'
import Notecard from '../component/Notecard'

function Notes() {
const [notes, setNotes] = useState([])

 useEffect(()=>{
  fetch('http://localhost:5000/notes')
  .then(res => res.json())
  .then(data => setNotes(data) )
 },[])

  const handleDelete = async (id) =>{
    await fetch('http://localhost:5000/notes/' + id, {
    method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  return (
    <Container>
      <Grid container spacing={3}>
      {notes.map(note =>(
        <Grid item key={note.id} xs={12} md={6} lg={4}>
        <Notecard note={note} handleDelete={handleDelete}/>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default Notes
