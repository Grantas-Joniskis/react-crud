import React from 'react';
import { Box, Container } from '@mui/material';
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
    <Styled.BlogsGrid>
      {blogs.map((blogsProps) => (<BlogCard key={blogsProps.id} {...blogsProps} />))}
    </Styled.BlogsGrid>
  );
};
export default HomePage;
