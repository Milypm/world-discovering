import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import PostDetails from './components/Posts/postDetails';
import NewPost from './components/Posts/NewPost';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'posts/:id',
      element: <PostDetails />
    },
    {
      path: 'posts/new',
      element: <NewPost />
    }
  ]);
  return routes;
}
export default Routing;