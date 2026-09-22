import { createBrowserRouter } from 'react-router';

import MainAppLayout from '@/Layouts/MainAppLayou/MainAppLayout';
import HomePage from '@/Pages/HomePage/HomePage';
import NotFoundPage from '@/Pages/NotFoundPage/NotFoundPage';
import HydrateFallback from '@/components/hydrateFallback/HydrateFallback';
import RouteError from '@/components/routeError/RouteError';

export const router = createBrowserRouter([
  {
    path: '/',
    // layout + home + 404 stay eager: the layout renders the shared sections
    // and the 404 must work even when lazy chunks fail to load
    element: <MainAppLayout />,
    errorElement: <RouteError />,
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/products',
        lazy: () =>
          import('@/Pages/ProductsPage/ProductsPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: '/products/:productID',
        lazy: () =>
          import('@/Pages/SingleProductPage/SingleProductPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: '/contact-us',
        lazy: () =>
          import('@/Pages/ContactPage/ContactPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: '/shopping-cart',
        lazy: () =>
          import('@/Pages/ShoppintCart/ShoppingCartPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
