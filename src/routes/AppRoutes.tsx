import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Pokedex from '../pages/pokedex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pokedex',
    element: <Pokedex />
  }
]);
const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
