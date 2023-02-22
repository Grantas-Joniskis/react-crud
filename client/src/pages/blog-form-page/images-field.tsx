import {
  Box, IconButton, InputAdornment, TextField,
} from '@mui/material';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ImagesField = () => (
  <Box sx={{ width: 1 }}>
    <TextField
      label="Image"
      fullWidth
      variant="filled"
      size="small"
      color="error"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ color: '#424242', '&:hover': { color: 'error.main' } }}>
              <CancelIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    <TextField
      label="Image"
      fullWidth
      variant="filled"
      size="small"
      color="error"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ color: '#424242', '&:hover': { color: 'error.main' } }}>
              <CancelIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    <IconButton sx={{ color: '#424242' }}>
      <AddPhotoAlternateIcon />
    </IconButton>
  </Box>
);

export default ImagesField;
