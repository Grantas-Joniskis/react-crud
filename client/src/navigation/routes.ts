const singleBlogPageRoot = '/blog/';
const updateBlogPageRoot = '/update-blog/';

const staticRoutes = {
  HomePage: '/',
  BlogFormPage: '/create-blog',
} as const;

const dynamicRoutes = {
  SingleBlogPage: {
    path: `${singleBlogPageRoot}:id`,
    createLink: (id: string | number) => `${singleBlogPageRoot}${id}`,
  },
  UpdateBlogPage: {
    path: `${updateBlogPageRoot}:id`,
    createLink: (id: string | number) => `${updateBlogPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
