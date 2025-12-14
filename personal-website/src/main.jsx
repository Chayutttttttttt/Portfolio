import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Header.jsx'
import Welcome from './Welcome.jsx'
import About from './About.jsx'
import Skill from './Skill.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Welcome />
    <About />
    <Skill />
  </StrictMode>,
)
