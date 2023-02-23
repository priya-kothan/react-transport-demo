
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';


// const BlogPage = lazy(() => import('./pages/Blog'));
const TransPortsPage = lazy(() => import('./pages/TransPorts'));
const TransPortPage = lazy(() => import('./pages/TransPort'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'TransPorts',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TransPortsPage />
              </Suspense>
            ),
            loader: (meta) =>
              import('./pages/TransPorts').then((module) => module.loader(meta)),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TransPortPage />
              </Suspense>
            ),
            loader: (meta) =>
              import('./pages/TransPort').then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
