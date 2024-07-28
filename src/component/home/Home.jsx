import React from 'react'
import { Typography,Box,FilledInput,IconButton } from '@mui/material'
import  { Search as SearchIcon ,Bookmark as BookmarkIcon ,  } from "@mui/icons-material"
 import book from "../../assets/dictionary.jpg"

const Home = () => {
  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      height:'100vh',
    
      color:'InfoText'
      
    }}>
    <img  src={book} alt="book"   />
    <Typography sx={{fontWeight:800, mt:'24px'}} variant='h4'>Dictionary</Typography>
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
