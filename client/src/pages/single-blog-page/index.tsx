import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Mousewheel, Keyboard,
} from 'swiper';
import Img from 'components/ui/img';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css.css';

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
  if (blog === undefined) return null;

  return (
    <Box sx={{
      height: '100%', width: '100%', backgroundImage: 'url(https://wallpaperaccess.com/full/1556621.jpg)', backgroundAttachment: 'fixed',
    }}
    >
      <Container sx={{ pt: '50px', width: '700px' }}>
        <Typography variant="h3" sx={{ textAlign: 'center', textTransform: 'capitalize' }}>{blog.title}</Typography>
        <Box sx={{
          width: 1, display: 'flex', justifyContent: 'space-evenly',
        }}
        >
          <Typography variant="body2" color="text.secondary" fontFamily="cursive" fontSize="19px" sx={{ p: 1, pl: 5 }}>
            by
            {' '}
            {blog.author}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily="cursive" fontSize="19px" sx={{ p: 1, pl: 5 }}>{blog.date}</Typography>
        </Box>
        <Box sx={{
          width: 1, height: '400px', margin: '0 auto',
        }}
        >
          <Swiper
            cssMode
            loop
            navigation
            pagination
            keyboard
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={50}
            slidesPerView={1}
            style={{ height: '100%', color: 'grey' }}
          >
            {blog.images.map((img) => (
              <SwiperSlide><Img src={img} sx={{ width: 1, height: 1 }} /></SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Typography variant="body1" textAlign="justify" paddingTop="50px">&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, exercitationem nisi. Suscipit nisi, doloribus consequuntur perferendis, obcaecati debitis saepe eos non soluta eligendi possimus minima! Impedit eveniet quibusdam architecto, facere ipsum recusandae, adipisci ab vero repellat culpa ipsa? Cumque iste illo culpa, voluptatibus suscipit ipsa. Mollitia iusto consectetur inventore explicabo quibusdam quis voluptatem deserunt fugit soluta iure quod amet quia, numquam vero id totam quos dicta? Natus debitis exercitationem delectus voluptas! Nesciunt officiis temporibus perferendis deleniti eveniet ducimus, alias eius repellat ipsa, ratione quod est. Nam quaerat ducimus suscipit. Cumque nemo id qui quae libero, dolores sequi recusandae blanditiis deleniti.</Typography>
      </Container>
    </Box>
  );
};
export default SingleBlogPage;
