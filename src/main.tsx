import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './enterprise.css'
import './structure.css'
import './mobile-site.css'
import './motion.css'
import App from './App'
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
