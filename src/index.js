import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import App from './App';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import { Error, Favourites, Results } from './pages/index';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const NavbarWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: '/favourites',
        element: <Favourites />,
      },
      {
        path: '/results',
        element: <Results />,
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
