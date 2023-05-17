import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
