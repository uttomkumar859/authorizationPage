// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './app.css'
import HomePage from './page/HomePage';
import About from './page/About';
import Service from './page/Service';
import Contact from './page/Contact';
import ErrorPage from './page/ErrorPage';
import AppLayout from './layout/AppLayout';
import AuthLayout from './layout/AuthLayout';
import LoginPage from './LoginPage/LoginPage';
import Signup from './LoginPage/SignUp';

function App() {
  const routerList = createBrowserRouter([
    {
      element: <AppLayout />,
      children : [
      {
        path : '/',
        element : <HomePage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path : '/service',
        element : <Service />
      },
      {
        path : '/contact',
        element : <Contact />
      }
      ,{
        path : '/*',
        element : <ErrorPage />
      },
      {
        element: <AuthLayout />,
        children:[{path: '/auth/login' ,element: <LoginPage />},
        {path: '/auth/signup' ,element : <Signup />}  ]
      }
    
    ]
    }
  ])
  return (
    <RouterProvider router={routerList}/>
  )
}

export default App
