import React from 'react';
import ApiService from 'services/api-service';

const useBlog = (id: string | undefined) => {
  const [blog, setBlog] = React.useState<undefined | BlogModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedBlog = await ApiService.fetchBlog(id);
        setBlog(fetchedBlog);
      })();
    }
  }, []);

  return blog;
};

export default useBlog;
