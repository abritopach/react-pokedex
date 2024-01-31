import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { NoContent } from './pages/NoContent';
import { Error404 } from './pages/Error404';
import { Pokedex } from './pages/Pokedex';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Pokemon } from './pages/Pokemon';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: <Pokedex />,
  },
  {
    path: "/pokemon/:name",
    element: <Pokemon />,
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});


const App = () => (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
)

export default App;
