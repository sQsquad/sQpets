import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './Styles/GlobalStyle'
import { ThemeProvider } from './contexto/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle/>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)