import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'

export function renderPage(page: ReactNode) {
  createRoot(document.getElementById('root')!).render(<StrictMode>{page}</StrictMode>)
}
