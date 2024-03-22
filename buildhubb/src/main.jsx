import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import ForgetPassword from './components/ForgetPassword.jsx'
import VerifyPassword from './components/VerifyPassword.jsx'
import ResetPassword from './components/ResetPassword.jsx'
import ResetSuccess from './components/ResetSuccess.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />
},
{
  path:'/login',
  element: <Login />
},
{
  path:'/forgetpassword',
  element: <ForgetPassword />
},
{
  path:'/verifypassword',
  element: <VerifyPassword />
},
{
  path:'/resetpassword',
  element: <ResetPassword />
},
{
  path:'/resetsuccess',
  element: <ResetSuccess />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>      
    <RouterProvider router={router} />
  </React.StrictMode>,
)
