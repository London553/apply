import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-whitesmoke/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {'<'}
            </div>
            <span className="text-xl font-bold text-gray-900">OpportunityOS</span>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' />'}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#calculator" className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Calculator
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              How It Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105">
              Why Us
            </a>
            <a href="#calculator" className="btn-primary text-sm">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-slide-up">
            <a href="#calculator" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-all">
              Calculator
            </a>
            <a href="#how-it-works" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-all">
              How It Works
            </a>
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-all">
              Why Us
            </a>
            <a href="#calculator" className="w-full btn-primary text-sm">Get Started</a>
          </div>
        )}
      </div>
    </nav>
  )
}
