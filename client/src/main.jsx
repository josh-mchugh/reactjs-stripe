import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Products from './Products';
import Bag from './Bag';
import Checkout from './Checkout';
import CheckoutComplete from './CheckoutComplete';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Products />,
                loader: async () => await fetch("/products")
            },
            {
                path: "/bag",
                element: <Bag />,
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/checkout/complete",
                element: <CheckoutComplete />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
