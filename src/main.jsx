import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppProvider } from './context/context.jsx'
import Detalles from './pages/Detalles.jsx'
import NotFound from './pages/NotFound.jsx'
import Inicio from './pages/Inicio.jsx'

const router = createBrowserRouter([{
    path:'/',
    element: <Inicio />,
    errorElement: <NotFound />,
  },
  {
    path:'/detalles/:application_number',
    element: <Detalles />,
  },

  {
    path: '*',
    element: <NotFound />,
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
