import { createBrowserRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import App from './App';
import Home from './Pages/Home/Home';

const Products = lazy(() => import('./Pages/Products/Products'));
const ProductDetail = lazy(() => import('./Components/ProductDetail'));
const Cart = lazy(() => import('./Components/Cart'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:
                    <Suspense>
                        <Home />
                    </Suspense>
            },
            {
                path: '/products',
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <Products />
                    </Suspense>

            },
            {
                path: '/products/:id',
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProductDetail />
                    </Suspense>
            },
            {
                path: '/cartproduct',
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <Cart />
                    </Suspense>

            }
        ]
    }
])

export default router;