import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Features from './components/Features'
import Modal from './components/Modal'
import Footer from './components/Footer'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [calculatorData, setCalculatorData] = useState(null)

  const handleCalculatorSubmit = (data) => {
    setCalculatorData(data)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

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
