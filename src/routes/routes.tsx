import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Posts from '../pages/Blog/posts';
import NotFound from '../pages/404';

const routes: RouteObject[] = [
    {
      path: '/',
      element: Home(),
    },
    {
        path: '/login',
        element: Login(),
    },
    {
        path: '/blog',
        element: Blog(),
    },
    {
        path: '/blog/:slug',
        element: Posts(),
    },
    {
      path: '/*',
      element: NotFound(),
    },
  ]
  
  const router = createBrowserRouter(routes);

  export default router