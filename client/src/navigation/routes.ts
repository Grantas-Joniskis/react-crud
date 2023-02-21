const singleBlogPageRoot = '/blog/';

const routes = {
  HomePage: '/',
  BlogFormPage: '/create-blog',
  SingleBlogPage: {
    path: `${singleBlogPageRoot}:id`,
    createLink: (id: string | number) => `${singleBlogPageRoot}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
