import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Input() {
    const categoryData = [
        {label: 'science'},
        {label: 'commerce'},
        {label: 'arts'},
        {label: 'bca'},
    ]
  return (
    <div>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categoryData}
      sx={{ marginTop:8,marginLeft:6,width: 300 }}
      renderInput={(params) => <TextField {...params} label="category" />}
    />

    </div>
  )
}

export default Input

