import React from 'react';
import { Stack, Typography } from '@mui/material';
import Img from 'components/ui/img';

type BlogCardProps = BlogModel;

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  image,
}) => (
  <Stack>
    <Img src={image} alt="" />
    <Typography variant="h3">{title}</Typography>
    <Typography variant="subtitle2">{author}</Typography>
    <Typography variant="subtitle2">{date}</Typography>
  </Stack>
);

export default BlogCard;
