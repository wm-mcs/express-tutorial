import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './assets/styles/main.scss';

import ErrorPage from './components/Error';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import App from './components/App';
import Login from './pages/Login';
import Home from './pages/Home';
import { routerDeclarations } from './config/router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routerDeclarations.home,
        element: <Home />,
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
