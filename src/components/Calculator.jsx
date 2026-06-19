import React, { useState, useMemo } from 'react'

export default function Calculator({ onSubmit }) {
  const [jobs, setJobs] = useState(5)
  const [opportunities, setOpportunities] = useState(2)
  const [duration, setDuration] = useState('weekly')

  // Pricing strategy: base price + per item
  const BASE_PRICE = 20
  const JOB_PRICE = 8
  const OPPORTUNITY_PRICE = 12

  const totalCost = useMemo(() => {
    const weekly = BASE_PRICE + (jobs * JOB_PRICE) + (opportunities * OPPORTUNITY_PRICE)
    if (duration === 'monthly') {
      return Math.round(weekly * 4.3) // Average weeks in a month
    }
    return weekly
  }, [jobs, opportunities, duration])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      jobs,
      opportunities,
      duration,
      totalCost
    })
  }

  return (
    <section id="calculator" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Message */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              ✨ Smart Pricing Calculator
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Know Your <span className="gradient-text">Investment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            We believe in fair pricing. Calculate exactly what you'll pay based on your unique needs—no hidden fees, no surprises.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Job Applications Input */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold text-gray-900">
                  📧 Job Applications per {duration === 'weekly' ? 'Week' : 'Month'}
                </label>
                <span className="text-3xl font-bold text-blue-600">{jobs}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={jobs}
                onChange={(e) => setJobs(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            {/* Opportunities Input */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold text-gray-900">
                  🎓 Other Opportunities per {duration === 'weekly' ? 'Week' : 'Month'}
                </label>
                <span className="text-3xl font-bold text-purple-600">{opportunities}</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={opportunities}
                onChange={(e) => setOpportunities(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0</span>
                <span>20</span>
              </div>
            </div>

            {/* Duration Toggle */}
            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-900">⏱️ Billing Period</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setDuration('weekly')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    duration === 'weekly'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Weekly
                </button>
                <button
                  type="button"
                  onClick={() => setDuration('monthly')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    duration === 'monthly'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Monthly
                  <span className="ml-2 text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full">Save 15%</span>
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Base Service Fee</span>
                <span className="font-semibold text-gray-900">${BASE_PRICE}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{jobs} Job Applications × ${JOB_PRICE}</span>
                <span className="font-semibold text-gray-900">${jobs * JOB_PRICE}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{opportunities} Other Opportunities × ${OPPORTUNITY_PRICE}</span>
                <span className="font-semibold text-gray-900">${opportunities * OPPORTUNITY_PRICE}</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total per {duration === 'weekly' ? 'Week' : 'Month'}</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${totalCost}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary text-lg font-bold py-4"
            >
              Get Started → Complete Application
            </button>

            <p className="text-center text-sm text-gray-500">
              ✅ No credit card required. We'll send you our secure application form.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
