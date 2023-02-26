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
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useBlog from 'hooks/use-blog';
import * as Styled from './styled';
import AuthorDateFields from './author-date-fields';
import ImagesField from './images-field';
import { getBlogFormValues } from './helpers';
import { getModeData } from './data';

const BlogFormPage = () => {
  const { id } = useParams();
  const [blog, blogLoadingData] = useBlog(id);
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();

  const mode = id !== undefined ? 'edit' : 'create';

  const {
    title,
    colorMain,
    color,
    buttonText,
    buttonColor,
  } = getModeData(mode);

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

  if (blogLoadingData) return null;

  console.log('UPDATING DATA');
  console.log(blog);

  return (
    <Box sx={{ height: '93vh', width: '100%', backgroundImage: 'url(https://wallpaperaccess.com/full/1556621.jpg)' }}>
      <Styled.PageLayout>
        <Styled.Paper>
          <Stack sx={{ gap: 2, alignItems: 'center' }} component="form" ref={formRef} onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{ color: colorMain, fontWeight: '500' }}>
              {title}
            </Typography>
            <HistoryEduIcon sx={{ fontSize: 60, color: colorMain }} />
            <TextField label="Title" name="title" fullWidth variant="filled" size="small" color={color} />
            <AuthorDateFields color={color} />
            <ImagesField color={color} />
            <Button
              variant="contained"
              size="large"
              fullWidth
              type="submit"
              sx={{
                bgcolor: buttonColor,
                '&:hover': {
                  bgcolor: 'error.main',
                },
              }}
            >
              {buttonText}
            </Button>
          </Stack>
        </Styled.Paper>
      </Styled.PageLayout>
    </Box>
  );
};

export default BlogFormPage;
