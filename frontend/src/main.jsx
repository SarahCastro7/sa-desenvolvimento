import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
