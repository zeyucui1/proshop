import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import App from './App'
import HomePage from './pages/HomePage'
// import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
