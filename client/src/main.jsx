import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Products, { loader } from './products/Products';
import Bag from './bag/Bag';
import Checkout from './checkout/Checkout';
import CheckoutComplete from './checkout/CheckoutComplete';

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
