import { Box, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

type AuthorDateFieldProps = {
  color: TextFieldProps['color']
};

const AuthorDateFields: React.FC<AuthorDateFieldProps> = ({ color }) => (
  <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
    <TextField label="Author" name="author" fullWidth variant="filled" size="small" color={color} />
    <TextField label="Date" name="date" fullWidth variant="filled" size="small" color={color} />
  </Box>
);

export default AuthorDateFields;
