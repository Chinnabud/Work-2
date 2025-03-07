import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import History from '../pages/History';
import Checkout from '../pages/Checkout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Layout from '../layouts/Layout';
import LayoutAdmin from '../layouts/LayoutAdmin';
import Dashbord from '../pages/admin/Dashbord';
import Category from '../pages/admin/Category';
import Product from '../pages/admin/Product';  // เพิ่มการ import ที่นี่
import Manage from '../pages/admin/Manage';
import LayoutUser from '../layouts/LayoutUser';
import HomeUser from '../pages/User/HomeUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      { path: '/history', element: <History /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '/admin',
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Dashbord /> },
      { path: 'category', element: <Category /> },
      { path: 'product', element: <Product /> },  
      { path: 'manage', element: <Manage /> },  
    ],
  },

  {
    path: '/User',
    element: <LayoutUser />,
    children: [
      { index: true, element: <HomeUser /> },
      
    ],
  },

]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
