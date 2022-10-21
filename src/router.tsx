import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Others from './pages/Others';
import React, { Suspense } from 'react';

const FormDemo = React.lazy(() => import('./pages/FormDemo'));
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/form-demo',
    element: <Suspense fallback={<></>}><FormDemo/></Suspense>
  },
  {
    path: '/others',
    element: <Others/>
  }
]);
