import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { Box } from '@mui/material';

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState<undefined | BlogModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedBlog = await ApiService.fetchBlog(id);
        setBlog(fetchedBlog);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(blog, null, 4)}
    </Box>
  );
};
export default SingleBlogPage;
