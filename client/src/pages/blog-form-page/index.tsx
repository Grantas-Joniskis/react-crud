import React from 'react';
import {
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import * as Styled from './styled';
import AuthorDateFields from './author-date-fields';
import ImagesField from './images-field';

const BlogFormPage = () => (
  <Box sx={{ height: '93vh', width: '100%', backgroundImage: 'url(https://wallpaperaccess.com/full/1556621.jpg)' }}>
    <Styled.PageLayout>
      <Styled.Paper>
        <Stack sx={{ gap: 2, alignItems: 'center' }}>
          <Typography variant="h5" sx={{ color: '#424242', fontWeight: '500' }}>CREATE BLOG</Typography>
          <HistoryEduIcon sx={{ fontSize: 60, color: '#424242' }} />
          <TextField label="Title" fullWidth variant="filled" size="small" color="error" />
          <AuthorDateFields />
          <ImagesField />
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  </Box>
);

export default BlogFormPage;
