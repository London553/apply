import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-whitesmoke flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              🚀 Apply Smarter, Not Harder
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Opportunities,<br />
            <span className="gradient-text">Our Expertise</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-lg">
            Stop wasting time on endless applications. We're experts at spotting and securing the best jobs and opportunities for you. Fair pricing. Expert execution. Your success.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <span className="text-gray-700 font-medium">Expert application specialists</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <span className="text-gray-700 font-medium">Transparent, usage-based pricing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <span className="text-gray-700 font-medium">Weekly & monthly flexibility</span>
            </div>
          </div>

          <div className="flex gap-4 pt-8">
            <a
              href="#calculator"
              className="btn-primary inline-block"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="space-y-6">
            {/* Floating Card 1 */}
            <div className="absolute -left-8 top-0 bg-white p-6 rounded-xl shadow-lg max-w-xs animate-float transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">📝</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Applications Submitted</p>
                  <p className="text-2xl font-bold text-blue-600">247</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute right-0 top-32 bg-white p-6 rounded-xl shadow-lg max-w-xs animate-float transform hover:scale-105 transition-transform" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-3">
                <span className="text-3xl">✅</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Success Rate</p>
                  <p className="text-2xl font-bold text-green-600">89%</p>
                </div>
              </div>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute -left-4 bottom-8 bg-white p-6 rounded-xl shadow-lg max-w-xs animate-float transform hover:scale-105 transition-transform" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <span className="text-3xl">😊</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Happy Clients</p>
                  <p className="text-2xl font-bold text-purple-600">1,200+</p>
                </div>
              </div>
            </div>

            {/* Center Graphic */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl">🎯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
