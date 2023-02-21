import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'services/api-service';
import BlogCard from './blog-card';
import * as Styled from './styled';

const HomePage = () => {
  const [blogs, setBlogs] = React.useState<BlogModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedBlogs = await ApiService.fetchBlogs();
      setBlogs(fetchedBlogs);
    })();
  }, []);

  return (
    <Box sx={{ backgroundImage: 'url(https://wallpaperaccess.com/full/1556621.jpg)', backgroundAttachment: 'fixed' }}>
      <Styled.BlogsGrid>
        {blogs.map((blogsProps) => (<BlogCard key={blogsProps.id} {...blogsProps} />))}
      </Styled.BlogsGrid>
    </Box>
  );
};
export default HomePage;
