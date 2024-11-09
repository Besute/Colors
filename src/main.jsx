import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import App from './App.jsx'

createRoot(document.querySelector('.section-box')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
