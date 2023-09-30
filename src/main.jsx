import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorPage from './ErrorPage.jsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import Cart from './routes/Cart.jsx';
import Shop from './routes/Shop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
