import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import App from './layouts/app/index';
//
import Register from './pages/Register';
import Platforms from './pages/Plataforms';
import Planos from './pages/planos';
import Checkout from './pages/Checkout';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/app',
      element: <App />,
      children: [
        { element: <Navigate to="/app/plataformas" replace /> },
        { path: 'plataformas', element: <Platforms /> },
        { path: 'planos/:id', element: <Planos /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'register', element: <Register /> }
      ]
    },
    { path: '*', element: <Navigate to="/app" replace /> }
  ]);
}
