import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocaleProvider } from './hooks/useLocale'
import App from './App'

// Marks that scripting is live, so the scroll reveals in index.css can hide content.
// Without it the page renders fully visible, which is what a crawler or print gets.
document.documentElement.classList.add('js')

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>,
)