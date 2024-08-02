import React, { useEffect, useState } from 'react';
import { Stack, Typography, Box, IconButton, Divider } from '@mui/material';
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Definition = () => {
  const navigate = useNavigate();
  const { word } = useParams();
  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        setDefinitions(response.data);
      } catch (error) {
        console.error('Error fetching the definition:', error);
      }
    };
    fetchDefinition();
  }, [word]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <IconButton onClick={() => navigate(-1)}>
          <BackIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mt: 3,
          background: 'linear-gradient(90.17deg, #191E5D 0.14%, #0F133A 98.58%)',
          boxShadow: '0px 10px 20px rgba(19,23,71,0.25)',
          px: 4,
          py: 5,
          color: 'white',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" textTransform="capitalize">
          {word}
        </Typography>
        <IconButton
          sx={{
            borderRadius: 2,
            p: 1,
            color: "#fff",
            background: theme => theme.palette.pink,
          }}
        >
          <PlayIcon />
        </IconButton>
      </Stack>

      {definitions.length > 0 && definitions.map((def, index) => (
        <React.Fragment key={index}>
          <Divider />
          {def.meanings.map((meaning) => (
            <Box
              key={meaning.partOfSpeech}
              sx={{
                boxShadow: '0px 10px 25px rgba(0,0,0,0.5)',
                backgroundColor: '#fff',
                p: 2,
                borderRadius: 2,
                mt: 3,
              }}
            >
              <Typography variant='subtitle1'>{meaning.partOfSpeech}</Typography>
              {meaning.definitions.map((definition, defIndex) => (
                <Typography key={defIndex}>
                  {definitions.length > 1 && `${index + 1}.`} {definition.definition}
                </Typography>
              ))}
            </Box>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default Definition;
