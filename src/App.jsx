import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Features from './components/Features'
import Modal from './components/Modal'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [calculatorData, setCalculatorData] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

  const handleCalculatorSubmit = (data) => {
    setCalculatorData(data)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  // Simple routing based on URL hash
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }
    
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Render Privacy Policy Page
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy />
  }

  // Render Terms of Service Page
  if (currentPage === 'terms-of-service') {
    return <TermsOfService />
  }

  // Render Home Page (default)
  return (
    <div className="min-h-screen bg-whitesmoke">
      <Navbar />
      <Hero />
      <Calculator onSubmit={handleCalculatorSubmit} />
      <Features />
      <Footer />
      <Modal isOpen={showModal} onClose={handleCloseModal} data={calculatorData} />
    </div>
  )
}

export default App
