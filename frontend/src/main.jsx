 //main jsx
 import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import router from './Routes/Routes';
import store from '../slices/store.js'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
      <RouterProvider router={router} />
      </Provider>
   
 </React.StrictMode>
)
