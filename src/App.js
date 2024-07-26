import React from 'react'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
