import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRoute} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRoute>
      <App />
    </BrowserRoute>
  </React.StrictMode>
)
