import React, { useState } from "react";
import { Typography, Box, FilledInput, IconButton } from "@mui/material";
import {
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";
import book from "../../assets/dictionary.jpg";
import { useNavigate } from 'react-router-dom';  

const Home = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedWord = word.trim().toLowerCase();
    if (!trimmedWord || trimmedWord.split(' ').length > 1) return;
    navigate(`/search/${word}`);  
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        color: "InfoText",
      }}
    >
      <img src={book} alt="book" />
      <Typography sx={{ fontWeight: 800, mt: "24px", mb: 1 }} variant="h4">
        Dictionary
      </Typography>
      <Typography>Find meaning of any English word</Typography>
      <Box sx={{ width: "600px" }}>
        <form onSubmit={handleSubmit}>
          <FilledInput
            value={word}
            onChange={(event) => setWord(event.target.value)}
            disableUnderline
            placeholder="search word"
            sx={{
              my: 4,
              boxShadow: "0px 10px 24px rgba(0,0,0,0.4)",
              "& .MuiFilledInput-input": {
                p: 2,
              },
            }}
            startAdornment={<SearchIcon color="disabled" />}
            fullWidth
          />
        </form>
      </Box>

      <IconButton
        sx={{
          borderRadius: 2,
          p: 2,
          color: "#fff",
          background: theme=> theme.palette.pink,
          boxShadow: "0px 10px 10px rgba(221,114,133,0.2)",
        }}
      >
        <BookmarkIcon />
      </IconButton>
    </Box>
  );
};

export default Home;
