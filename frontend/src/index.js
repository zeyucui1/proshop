import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import App from './App'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import store from './store'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
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
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'shipping',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <ShippingPage />,
          },
        ],
      },
      {
        path: 'payment',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <PaymentPage />,
          },
        ],
      },
      {
        path: 'placeorder',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <PlaceOrderPage />,
          },
        ],
      },
      {
        path: 'order/:id',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <OrderPage />,
          },
        ],
      },
      {
        path: 'profile',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
)
