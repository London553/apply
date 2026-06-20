import React from 'react'

export default function Features() {
  const journeySteps = [
    {
      step: 1,
      icon: '🧮',
      title: 'Smart Calculation',
      description: 'Use our interactive calculator to determine your needs and investment. Understand exactly what you need based on your job search goals.',
      color: 'blue'
    },
    {
      step: 2,
      icon: '📝',
      title: 'Complete Your Profile',
      description: 'Fill out our comprehensive form with your resume, skills, and preferences. We gather everything needed to represent you powerfully to employers.',
      color: 'purple'
    },
    {
      step: 3,
      icon: '🎯',
      title: 'We Apply & Schedule',
      description: 'Our expert team applies to roles on your behalf and schedules interviews. We handle the details while you focus on preparing for opportunities.',
      color: 'green'
    },
  ]

  const colorGradients = {
    'blue': 'from-blue-400 to-blue-600',
    'purple': 'from-purple-400 to-purple-600',
    'green': 'from-green-400 to-green-600',
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-whitesmoke">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            🚀 Client Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Simple <span className="gradient-text">Steps to Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your success starts with understanding what you need, moves to preparation, and culminates with opportunities—handled by our expert team.
          </p>
        </div>

        {/* Journey Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Container */}
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number Circle */}
                <div className={`absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r ${colorGradients[step.color]} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 mt-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 inline-block">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${colorGradients[step.color]} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-8xl">{step.icon}</div>
                </div>
              </div>

              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < journeySteps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 items-center justify-center w-8 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
                  <div className="w-4 h-4 bg-white border-2 border-purple-500 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Ready to start your journey with us?
          </p>
          <a
            href="#calculator"
            className="btn-primary inline-block"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
