import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import App from './App'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import store from './store'
import { Provider } from 'react-redux'
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
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
