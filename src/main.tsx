import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Dismiss the first-paint loading skeleton (see index.html) once React has
// painted its first frame, so the real page never flashes in behind it.
const loader = document.getElementById('app-loader')
if (loader) {
  const dismiss = () => {
    loader.classList.add('is-done')
    loader.addEventListener('transitionend', () => loader.remove(), { once: true })
    setTimeout(() => loader.remove(), 600)
  }
  requestAnimationFrame(() => requestAnimationFrame(dismiss))
}
