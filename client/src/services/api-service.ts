import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchBlogs = async () => {
  const response = await api.get<BlogModel[]>('/blogs');
  return response.data;
};

const fetchBlog = async (id: string | number) => {
  const response = await api.get<BlogModel>(`/blogs/${id}`);
  return response.data;
};

const postBlog = async (blog: BlogModel) => {
  api.post('/blogs', {
    id: blog.id,
    title: blog.title,
    author: blog.author,
    date: blog.date,
    image: blog.image,
    images: blog.images,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteBlog = async (id: string | number) => {
  await api.delete(`blogs/${id}`);
};

const ApiService = {
  fetchBlogs,
  fetchBlog,
  postBlog,
  deleteBlog,
};

export default ApiService;
