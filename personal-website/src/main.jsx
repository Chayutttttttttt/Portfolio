import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import './index.css'
import Header from './Header.jsx'
import Welcome from './Welcome.jsx'
import About from './About.jsx'
import Skill from './Skill.jsx'
import Footer from './Footer.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client = {queryClient}>
    <Header />
    <Welcome />
    <About />
    <Skill />
    <Footer />
  </QueryClientProvider>,
)
