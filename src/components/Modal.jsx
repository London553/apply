import React from 'react'

export default function Modal({ isOpen, onClose, data }) {
  if (!isOpen) return null

  const applicationFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSf0gZvqb_SqRq07a3alS5nl4Encf5J5UjU7FG8cwcmNlhTeIQ/viewform?usp=sharing&ouid=101211381578045768826'

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-slide-up">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full space-y-6 animate-bounce-gentle">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center animate-bounce-gentle">
              <span className="text-3xl">🎉</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Perfect! We're Ready
            </h3>
            <p className="text-gray-600">
              Let's proceed with your application
            </p>
          </div>

          {/* Info Cards */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-xs text-gray-500">Job Applications</p>
                <p className="font-bold text-gray-900">{data?.jobs} per {data?.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-xs text-gray-500">Other Opportunities</p>
                <p className="font-bold text-gray-900">{data?.opportunities} per {data?.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💰</span>
              <div>
                <p className="text-xs text-gray-500">Total Investment</p>
                <p className="font-bold text-gray-900">₦{data?.totalCost}/{data?.duration}</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-3">
            <p className="text-center text-gray-700 font-semibold">
              Complete your application now:
            </p>
            <a
              href={applicationFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center"
            >
              Open Application Form
            </a>
          </div>

          {/* Message */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Pro Tip:</span> Our application form is secure and takes about 2-3 minutes. We respect your time and data.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}
