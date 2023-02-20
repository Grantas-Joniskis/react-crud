import React from 'react';
import { Box, Container } from '@mui/material';
import ApiService from 'services/api-service';

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
        {JSON.stringify(blogs, null, 4)}
      </Box>
    </Container>
  );
};
export default HomePage;
