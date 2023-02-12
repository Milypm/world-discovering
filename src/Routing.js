import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import PostDetails from './components/Posts/postDetails';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'posts/:id',
      element: <PostDetails />
    }
  ]);
  return routes;
}
export default Routing;