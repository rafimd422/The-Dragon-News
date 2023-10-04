import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import AuthContext from './contextProvider/AuthContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={routes} />
    </AuthContext>
  </React.StrictMode>,
)
