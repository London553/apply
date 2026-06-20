import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-whitesmoke flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-16">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              NDPA 2023 Compliant - Last Updated: June 18, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">1. Our Commitment</h2>
              <p>
                SteadySearch is committed to protecting your personal data in compliance with the Nigeria Data Protection Act (NDPA) 2023. We process your data based on your explicit consent and for the performance of the services you requested.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">2. Data We Collect</h2>
              <p>We collect only the minimum data necessary to facilitate your job search:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Identity Data:</strong> Full name, contact information (email, phone number).</li>
                <li><strong>Professional Data:</strong> CV/Resume, work history, education, and skills.</li>
                <li><strong>Usage Data:</strong> Technical identifiers like IP addresses collected during your interaction with our platform.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">3. Purpose and Legal Basis</h2>
              <p>We process your data to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Identify and apply for job opportunities on your behalf</strong> (Contractual Necessity).</li>
                <li><strong>Communicate updates and career-related opportunities to you</strong> (Consent).</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">4. Data Subject Rights</h2>
              <p>Under the NDPA 2023, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request copies of the data we hold.</li>
                <li><strong>Rectify:</strong> Ask us to correct inaccurate information.</li>
                <li><strong>Erase:</strong> Request deletion of your data ("Right to be Forgotten").</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                <li><strong>Withdraw Consent:</strong> You may withdraw your consent at any time via your account settings or by emailing us. Withdrawal does not affect the lawfulness of processing done before the withdrawal.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">5. Data Security & Storage</h2>
              <p>
                We implement robust encryption and access controls. Your data is stored securely. In the event of a data breach, we will notify the Nigeria Data Protection Commission (NDPC) within 72 hours and notify affected users if the breach poses a high risk to your rights.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">6. Cross-Border Transfers</h2>
              <p>
                If we transfer your data to service providers located outside Nigeria, we ensure that the recipient country provides an adequate level of data protection in line with NDPC guidelines.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
