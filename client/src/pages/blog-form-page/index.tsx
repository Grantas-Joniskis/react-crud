import React from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ApiService from 'services/api-service';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import * as Styled from './styled';
import AuthorDateFields from './author-date-fields';
import ImagesField from './images-field';
import { getBlogFormValues } from './helpers';

const BlogFormPage = () => {
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getBlogFormValues(formRef.current);
      await ApiService.postBlog(values);
      navigate(routes.HomePage);
    } catch (error) {
      alert('Wrong Data Entered!');
      console.log(error);
    }
  };

  return (
    <Box sx={{ height: '93vh', width: '100%', backgroundImage: 'url(https://wallpaperaccess.com/full/1556621.jpg)' }}>
      <Styled.PageLayout>
        <Styled.Paper>
          <Stack sx={{ gap: 2, alignItems: 'center' }} component="form" ref={formRef} onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{ color: '#424242', fontWeight: '500' }}>CREATE BLOG</Typography>
            <HistoryEduIcon sx={{ fontSize: 60, color: '#424242' }} />
            <TextField label="Title" name="title" fullWidth variant="filled" size="small" color="error" />
            <AuthorDateFields />
            <ImagesField />
            <Button
              variant="contained"
              size="large"
              fullWidth
              type="submit"
              sx={{
                bgcolor: '#FF1700',
                '&:hover': {
                  bgcolor: 'error.main',
                },
              }}
            >
              Create
            </Button>
          </Stack>
        </Styled.Paper>
      </Styled.PageLayout>
    </Box>
  );
};

export default BlogFormPage;
