import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.less';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AppContext } from './appContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContext.Provider value={{
      name: 'vite',
      age: 12
    }}>
      <RouterProvider router={router}/>
    </AppContext.Provider>
  </React.StrictMode>
);
