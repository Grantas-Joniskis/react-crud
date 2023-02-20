import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024/blogs',
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

const ApiService = {
  fetchBlogs,
};

export default ApiService;
