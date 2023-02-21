import React from 'react';
import {
  Box,
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';

type BlogCardProps = BlogModel;

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  author,
  date,
  image,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(routes.SingleBlogPage.createLink(id))}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 0px 15px 4px #454545BF',
        },
      }}
    >
      <CardMedia image={image} title="blog image" sx={{ height: 180 }} />
      <CardContent>
        <Typography variant="h5" textAlign="center" gutterBottom textTransform="capitalize">{title}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant="body2" color="text.secondary" fontFamily="cursive" fontSize="14px">
            by
            {' '}
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily="cursive" fontSize="14px">{date}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
