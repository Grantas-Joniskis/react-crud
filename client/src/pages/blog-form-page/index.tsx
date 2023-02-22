import React from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CancelIcon from '@mui/icons-material/Cancel';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const BlogFormPage = () => (
  <Box sx={{ height: '93vh', width: '100%', backgroundImage: 'url(https://wallpaperaccess.com/full/1556621.jpg)' }}>
    <Stack sx={{
      py: { xs: 2, md: 4, xl: 6 },
      px: 2,
      alignItems: 'center',
    }}
    >
      <Paper
        component="form"
        elevation={6}
        sx={{ p: 3, width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }) }}
      >
        <Stack sx={{ gap: 2, alignItems: 'center' }}>
          <Typography variant="h5" sx={{ color: '#424242', fontWeight: '500' }}>CREATE BLOG</Typography>
          <HistoryEduIcon sx={{ fontSize: 60, color: '#424242' }} />
          <TextField label="Title" fullWidth variant="filled" size="small" color="error" />
          <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
            <TextField label="Author" fullWidth variant="filled" size="small" color="error" />
            <TextField label="Date" fullWidth variant="filled" size="small" color="error" />
          </Box>
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
        </Stack>
      </Paper>
    </Stack>
  </Box>
);

export default BlogFormPage;
