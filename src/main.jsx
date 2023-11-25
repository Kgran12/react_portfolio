import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            index: true,
            element: <Homepage />,
          },
          {
            path: '/Portfolio',
            element: <Portfolio />,
          },
          {
            path: '/Contact',
            element: <Contact />
          },
          {
            path: '/Resume',
            element: <Resume />
          }
        ],
      },
    ]);

    ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
      );