import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Products from '../components/Products/Products';
import ProductDetailsPage from '../components/ProductDetailsPage/ProductDetailsPage';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
          path: "/products",
          Component: Products
        },
        {
          path:"/products/:slug",
          Component: ProductDetailsPage
        },
        {
          path: "/about",
          Component: AboutSection
        },
        {
          path: "/contact",
          Component: ContactSection
        }
    ]
  },
]);