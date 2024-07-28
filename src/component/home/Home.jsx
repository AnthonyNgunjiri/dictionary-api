import React from 'react'
import { Typography,Box,FilledInput,IconButton } from '@mui/material'

const Home = () => {
  return (
    <Box>
    <img src="../../asset/dictionary.jpg" alt="" />
    <Typography>Dictionary</Typography>
    <Typography>Find meaning of any english word</Typography>
    <FilledInput>
     <IconButton>
      <BookmarkIcon />
      </IconButton> 
    </FilledInput>

    </Box>
  )
}

export default Home
