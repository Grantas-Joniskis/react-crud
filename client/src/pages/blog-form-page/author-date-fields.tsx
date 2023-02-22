import { Box, TextField } from '@mui/material';
import React from 'react';

const AuthorDateFields = () => (
  <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
    <TextField label="Author" fullWidth variant="filled" size="small" color="error" />
    <TextField label="Date" fullWidth variant="filled" size="small" color="error" />
  </Box>
);

export default AuthorDateFields;
