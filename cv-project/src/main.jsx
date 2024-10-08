import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Base } from './components/Base'
import './components/base.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Base></Base>
  </StrictMode>,
)