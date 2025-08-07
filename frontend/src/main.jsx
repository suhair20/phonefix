 //main jsx
 import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <RouterProvider router={router} />
   
 </React.StrictMode>
)
