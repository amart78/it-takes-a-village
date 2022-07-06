import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Search({setSearch}) {

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
 
    <TextField 
        id="filled-basic" 
        label="Search for a villager..." variant="filled" 
        onChange = {(e) =>  setSearch(e.target.value)} className="prompt"
    />
       

  </Box>
);
}


export default Search;