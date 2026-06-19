import React from 'react'

export default function Features() {
  const colorMap = {
    'blue': 'from-blue-400 to-blue-600',
    'green': 'from-green-400 to-green-600',
    'purple': 'from-purple-400 to-purple-600',
    'orange': 'from-orange-400 to-orange-600',
    'red': 'from-red-400 to-red-600',
    'indigo': 'from-indigo-400 to-indigo-600',
  }

  const features = [
    {
      icon: '🧠',
      title: 'Expert Knowledge',
      description: "Our team consists of recruitment specialists who know exactly what employers and scholarship committees look for.",
      gradientClass: colorMap['blue']
    },
    {
      icon: '💚',
      title: 'We Care About You',
      description: "Your success is our success. We treat every application like it's our own. Empathy-driven service, always.",
      gradientClass: colorMap['green']
    },
    {
      icon: '🎯',
      title: 'Direct & Transparent',
      description: "No fluff, no hidden fees. We tell you exactly what we'll do and how much it costs. Clarity you can trust.",
      gradientClass: colorMap['purple']
    },
    {
      icon: '⚡',
      title: 'Speed & Efficiency',
      description: "While you focus on your career goals, we handle the applications with precision and attention to detail.",
      gradientClass: colorMap['orange']
    },
    {
      icon: '📊',
      title: 'Data-Driven Approach',
      description: "Every application is optimized based on opportunities analysis and success patterns we've identified.",
      gradientClass: colorMap['red']
    },
    {
      icon: '🔒',
      title: 'Your Privacy Matters',
      description: "All your information is secure, encrypted, and never shared with third parties. Your trust is everything.",
      gradientClass: colorMap['indigo']
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-whitesmoke">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            💡 Why Choose OpportunityOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for People Like <span className="gradient-text">You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert expertise combined with genuine empathy. We're direct about what we do because you deserve the truth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Accent Line */}
              <div className={`mt-6 h-1 bg-gradient-to-r ${feature.gradientClass} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
