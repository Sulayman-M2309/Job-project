import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied',
        element:<Applied></Applied>,
        loader:()=> fetch('../jobs.json')
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/Job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json')
      }
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
