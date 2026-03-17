import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Platform from './pages/Platform'
import Pricing from './pages/Pricing'
import Team from './pages/Team'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
