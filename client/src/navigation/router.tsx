import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import SingleBlogPage from 'pages/single-blog-page';
import BlogFormPage from 'pages/blog-form-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.SingleBlogPage.path,
        element: <SingleBlogPage />,
      },
      {
        path: routes.BlogFormPage,
        element: <BlogFormPage />,
      },
      {
        path: routes.UpdateBlogPage.path,
        element: <BlogFormPage />,
      },
    ],
  },
]);

export default router;
