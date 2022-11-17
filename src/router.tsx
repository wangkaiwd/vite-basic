import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Others from './pages/Others';
import React, { Suspense } from 'react';
import ScreenLoading from './components/ScreenLoading/ScreenLoading';

const FormDemo = React.lazy(() => import('./pages/FormDemo'));
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/form-demo',
    element: <Suspense fallback={<ScreenLoading/>}><FormDemo/></Suspense>
  },
  {
    path: '/others',
    element: <Others/>
  }
]);
