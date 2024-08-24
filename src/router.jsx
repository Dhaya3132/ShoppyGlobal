import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductDetail from './Components/ProductDetail';

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
            }
        ]
    }
])

export default router;