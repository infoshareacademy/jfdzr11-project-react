import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <App />
//   },
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/students",
//     element: <Students />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
