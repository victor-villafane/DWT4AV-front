import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Register from './components/Login/Register.jsx';
import Home from './pages/Home.jsx';
import ProtectedRoute from './components/Rutas/ProtectedRoute.jsx';
import Layout from './components/Layout/Layout.jsx';
import DetallePelicula from './components/Peliculas/DetallePelicula.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [ //children es un array de objetos que representan rutas, rutas anidadas
      {
        path: "/",
        element: <ProtectedRoute><Home /></ProtectedRoute>, //ProtectedRoute es un componente que se encarga de proteger las rutas
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/pelicula/:id",
        element: <ProtectedRoute> <DetallePelicula /> </ProtectedRoute>
      }       
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
