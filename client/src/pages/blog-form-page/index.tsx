import React from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import * as Styled from './styled';
import AuthorDateFields from './author-date-fields';
import ImagesField from './images-field';

const isStringArray = (arr: Array<unknown | string>):arr is string[] => arr.every((str) => typeof str !== 'string');

const getBlogFormData = (form: HTMLFormElement | undefined): Omit<BlogModel, 'id'> => {
  const formData = new FormData(form);

  const title = formData.get('title');
  if (typeof title !== 'string') throw new Error('Missing Title');
  const author = formData.get('author');
  if (typeof author !== 'string') throw new Error('Missing Author');
  const date = formData.get('date');
  if (typeof date !== 'string') throw new Error('Missing Date');
  const images = formData.getAll('images'); // .filter((img) => img !== '')
  if (!isStringArray(images)) throw new Error('All Images Must Be Strings!');
  const image = images[0];
  if (typeof image !== 'string') throw new Error('All Images Must Be Strings!');

  const values = {
    title,
    author,
    date,
    image,
    images: images.filter((img) => img !== ''),
  };

  return values;
};

const BlogFormPage = () => {
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getBlogFormData(formRef.current);
      console.log('Creating...');
      console.log(values);
    } catch (error) {
      alert('Wrong data');
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
