import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { NoContent } from './pages/NoContent';
import { Error404 } from './pages/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: <NoContent />,
  },
  {
    path: "/moves",
    element: <NoContent />,
  },
  {
    path: "/abilities",
    element: <NoContent />,
  },
  {
    path: "/berries",
    element: <NoContent />,
  },
  {
    path: "/location",
    element: <NoContent />,
  },
  {
    path: "/type_charts",
    element: <NoContent />,
  },
  {
    path: "*",
    element: <Error404 />,
  }
]);


const App = () => (
    <RouterProvider router={router} />
)

export default App;
