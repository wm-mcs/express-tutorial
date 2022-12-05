import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './assets/styles/main.scss';

import MainLayout from './components/layout/MainLayout';
import ErrorPage from './components/Error';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { routerDeclarations } from './config/router';
import { useEnv } from './composables/use-env';

const { apiUrlPath } = useEnv();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routerDeclarations.home,
        element: <h1 style={{ color: 'black' }}>Home3 {apiUrlPath}</h1>,
      },

      {
        path: routerDeclarations.dashboard,
        element: <Dashboard />,
      },

      {
        path: routerDeclarations.register,
        element: <Register />,
      },
      {
        path: routerDeclarations.login,
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
