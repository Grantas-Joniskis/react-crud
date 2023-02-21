import React from 'react';
import { Box, Container } from '@mui/material';
import ApiService from 'services/api-service';
import BlogCard from './blog-card';

const HomePage = () => {
  const [blogs, setBlogs] = React.useState<BlogModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedBlogs = await ApiService.fetchBlogs();
      setBlogs(fetchedBlogs);
    })();
  }, []);

  return (
    <Container>
      <Box component="pre">
        {blogs.slice(0, 1).map((houseProps) => (<BlogCard key={houseProps.id} {...houseProps} />))}
      </Box>
    </Container>
  );
};
export default HomePage;
