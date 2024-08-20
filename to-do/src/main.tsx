import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Form from './components/Form.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Form />
  </StrictMode>,
)
