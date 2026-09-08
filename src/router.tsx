import { createBrowserRouter } from 'react-router';

import MainAppLayout from '@/Layouts/MainAppLayou/MainAppLayout';
import HomePage from '@/Pages/HomePage/HomePage';
import ProductsPage from '@/Pages/ProductsPage/ProductsPage';
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
    ],
  },
]);
