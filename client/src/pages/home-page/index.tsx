import React from 'react';
import { Box, Button, Container } from '@mui/material';
import ApiService from 'services/api-service';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import BlogCard from './blog-card';
import * as Styled from './styled';

const HomePage = () => {
  const [blogs, setBlogs] = React.useState<BlogModel[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const fetchedBlogs = await ApiService.fetchBlogs();
      setBlogs(fetchedBlogs);
    })();
  }, []);

  return (
    <Box sx={{
      height: '100%', width: '100%', backgroundImage: 'url(https://wallpaperaccess.com/full/1556621.jpg)', backgroundAttachment: 'fixed',
    }}
    >
      <Container sx={{ mt: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate(routes.BlogFormPage)}
          sx={{
            bgcolor: '#FF1700',
            '&:hover': {
              bgcolor: 'error.main',
            },
          }}
        >
          Create Blog
        </Button>
        <Styled.BlogsGrid>
          {blogs.map((blogsProps) => (<BlogCard key={blogsProps.id} {...blogsProps} />))}
        </Styled.BlogsGrid>
      </Container>
    </Box>
  );
};
export default HomePage;
