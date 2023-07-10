import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Products, { loader } from './products/Products';
import Bag from './bag/Bag';
import Checkout from './checkout/Checkout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Products />,
                loader: loader
            },
            {
                path: "/bag",
                element: <Bag />,
            },
            {
                path: "/checkout",
                element: <Checkout />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
