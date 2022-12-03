import {createBrowserRouter} from 'react-router-dom';
import React from 'react';
import LazyComponent from './components/LazyComponent/LazyComponent';

const App = React.lazy(() => import('./App'));
const Others = React.lazy(() => import('./pages/Others'));
const FormDemo = React.lazy(() => import('./pages/FormDemo'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LazyComponent><App/></LazyComponent>
	},
	{
		path: '/form-demo',
		element: <LazyComponent><FormDemo/></LazyComponent>
	},
	{
		path: '/others',
		element: <LazyComponent><Others/></LazyComponent>
	}
]);
