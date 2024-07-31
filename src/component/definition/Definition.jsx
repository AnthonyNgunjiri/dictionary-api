import React from 'react';
import { Stack, Typography, Box, IconButton } from '@mui/material';
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

const Definition = () => {
  const navigate = useNavigate();
  const { word } = useParams();

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
    </>
  );
};

export default Definition;
