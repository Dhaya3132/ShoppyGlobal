import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/products',
                element:<Products />
            },
            {
                path:'/products/:id',
                element:<ProductDetail />
            },
            {
                path:'/cartproduct',
                element:<Cart />
            }
        ]
    }
])

export default router;