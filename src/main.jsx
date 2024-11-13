import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Login from './components/Login/Login.jsx';
// import Register from './components/Login/Register.jsx';
// import Home from './pages/Home.jsx';
// import ProtectedRoute from './components/Rutas/ProtectedRoute.jsx';
import Layout from './components/Layout/Layout.jsx';
// import DetallePelicula from './components/Peliculas/DetallePelicula.jsx'
// import ListadoLibro from './components/Libros/ListadoLibro.jsx'
// import LibroDetalle from './components/Libros/LibroDetalle.jsx'
// import Logout from './components/Login/Logout.jsx'
import Error404Page from './pages/Error404Page.jsx'

//Usamos lazy para la carga diferida de componentes
const Home = lazy( () => import( './pages/Home.jsx' ) )
const ProtectedRoute = lazy( () => import('./components/Rutas/ProtectedRoute.jsx') )
const DetallePelicula = lazy( () => import('./components/Peliculas/DetallePelicula.jsx') )
const ListadoLibro = lazy( () => import('./components/Libros/ListadoLibro.jsx') )
const LibroDetalle = lazy( () => import('./components/Libros/LibroDetalle.jsx') )
const Logout = lazy( () => import('./components/Login/Logout.jsx') )
const Login = lazy( () => import('./components/Login/Login.jsx') )
const Register = lazy( () => import('./components/Login/Register.jsx') )

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [ //children es un array de objetos que representan rutas, rutas anidadas
      {
        path: "/",
        element: (
            <Suspense fallback={ <div>Cargando..</div> }>
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>{/*ProtectedRoute es un componente que se encarga de proteger las rutas */}
            </Suspense>), 
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
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/pelicula/:id",
        element: <ProtectedRoute> <DetallePelicula /> </ProtectedRoute>
      },
      {
        path: "/libros",
        element: <ProtectedRoute> <ListadoLibro /> </ProtectedRoute>
      },
      {
        path: "/libro/:id",
        element: <ProtectedRoute> <LibroDetalle /> </ProtectedRoute>
      },
      {
        path: "*",
        element: <Error404Page />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
