const singleBlogPageRoot = '/blog/';

const staticRoutes = {
  HomePage: '/',
  BlogFormPage: '/create-blog',
} as const;

const dynamicRoutes = {
  SingleBlogPage: {
    path: `${singleBlogPageRoot}:id`,
    createLink: (id: string | number) => `${singleBlogPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
