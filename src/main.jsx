import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import Userdetails from './Components/UserDetails/Userdetails';
import Posts from './Components/Posts/Posts';
import Postdetails from './Components/PostDetails/Postdetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Userdetails></Userdetails>
      },
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Postdetails></Postdetails>

      }
    ]
  },
  {
    path: "/about",
    element: <div>You are now in about page</div>,
  },
  {
    path: "/contact",
    element: <div>You are now in contact page</div>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
