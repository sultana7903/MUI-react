import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { green } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';


// Material UI is a library of React UI components that implements Google's Material Design.
//container gives margin on the left

function Create() {
  const history = useNavigate()
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

 const handleSubmit = (e)=>{
  e.preventDefault()
  setTitleError(false)
  setDetailsError(false)

  if(title === ''){
    setTitleError(true)
  }

  if(details === ''){
    setDetailsError(true)
  }


  if(title && details){
    // console.log(title, details, category)
    fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({title, details, category})
    }).then(() => history.push('/notes'))
  }

 }

  return (

    <Container>
      <Typography 

      sx={{
        textDecoration: 'underline',
        color: 'blue',
        fontWeight:'bold',
        '&:hover': {
        textDecoration: 'bold',
        color: 'green',
        cursor: 'pointer'
        }
      }}

       variant='h6'
       color='textPrimary'
       component='h2'
       gutterBottom
       >
        Hello this is a Typography
      </Typography>

     <Box onSubmit={handleSubmit}
     component="form"
     sx={{
     marginTop:5,
     marginBottom:2,
     display:'block'
  
     }}
     noValidate
     autoComplete='off'
     >
     <TextField 
     onChange={(e)=> setTitle(e.target.value)}
     label="Note Title" 
     variant='outlined' 
     color='secondary'
     fullWidth
     required   
     error={titleError} 
     />
     <br />
     <br />
      <TextField 
     onChange={(e)=> setDetails(e.target.value)}
     label="Details" 
     variant='outlined' 
     color='secondary'
     multiline
     rows={6}
     fullWidth
     required    
     error={detailsError}
     />
    
     <FormControl 
     sx={{
      marginTop:5,
     marginBottom:10,
     fontSize:25,
     display:'block'
     }}
     onChange={(e)=>setCategory(e.target.value)}>
      <FormLabel id="demo-radio-buttons-group-label">Note Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="reminder"
        name="radio-buttons-group"
      >
        <FormControlLabel value="money" control={<Radio />} label="Money" />
        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
        <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
    </FormControl>
     
     <Button
      sx={{
        fontSize: 22,
        margin: 4 ,
        padding: 1,
        fontWeight: 600,
        backgroundColor: 'violet',
        color: 'black',
       ' &:hover': {
        backgroundColor: 'tomato'
       }

      }}
       type='submit'
       variant='contained'
       color='success'
       startIcon={<SendIcon/>}
       endIcon={<KeyboardArrowRightIcon/>}
       >
        Submit
      </Button>
     </Box>
    
    
      {/* <Button variant='contained' color='secondary'>
        Submit
      </Button>
      <Button variant='contained' color='success'>
        Submit
      </Button>
      <Button variant='outlined' color='error'>
        Submit
      </Button> */}

      {/* <buttonGroup color='secondary' variant='contained'>
        <button>One</button>
        <button>Two</button>
        <button>Three</button>
        <button>Four</button>
      </buttonGroup> */}

      {/* icons */}
      {/* <br/>
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='secondary' fontSize='large' />
      <AcUnitOutlinedIcon color='primary' fontSize='small' />
      <AcUnitOutlinedIcon color='action' fontSize='small' />
      <AcUnitOutlinedIcon color='error' fontSize='small' />
      <AcUnitOutlinedIcon color='disabled' fontSize='small' /> */}
      
    </Container>
  )
}

export default Create

