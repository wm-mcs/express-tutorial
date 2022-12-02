import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './assets/styles/main.scss';

import MainLayout from './components/layout/MainLayout';
import ErrorPage from './components/Error';
import Dashboard from './pages/Dashboard';

import { routerDeclarations } from './config/router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routerDeclarations.home,
        element: <h1 style={{ color: 'black' }}>Home3</h1>,
      },

      {
        path: routerDeclarations.dashboard,
        element: <Dashboard />,
      },

      {
        path: routerDeclarations.users,
        exact: true,
        element: <h1 style={{ color: 'black' }}>users</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
