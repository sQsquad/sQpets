import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
)