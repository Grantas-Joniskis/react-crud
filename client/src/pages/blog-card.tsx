import React from 'react';
import {
  Box,
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';

type BlogCardProps = BlogModel;

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  image,
}) => (
  <Card sx={{}}>
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

export default BlogCard;
