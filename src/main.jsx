import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from './Store/store.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </Provider>,
)
