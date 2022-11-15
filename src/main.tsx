import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// global styles
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
