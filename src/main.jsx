import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NoPage from './components/NoPage/NoPage.jsx'
import Login from './pages/LogIn/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/signup',
        element:<Signup/>
      },
      {
        path: '*',
        element: <NoPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
