import { createBrowserRouter } from 'react-router';

import MainAppLayout from '@/Layouts/MainAppLayou/MainAppLayout';
import ContactPage from '@/Pages/ContactPage/ContactPage';
import HomePage from '@/Pages/HomePage/HomePage';
import ProductsPage from '@/Pages/ProductsPage/ProductsPage';
import ShoppingCartPage from '@/Pages/ShoppintCart/ShoppingCartPage';
import SingleProductPage from '@/Pages/SingleProductPage/SingleProductPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainAppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/:productID',
        element: <SingleProductPage />,
      },
      {
        path: '/contact-us',
        element: <ContactPage />,
      },
      {
        path: '/shopping-cart',
        element: <ShoppingCartPage />,
      },
    ],
  },
]);
