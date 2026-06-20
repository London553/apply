import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-whitesmoke flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-16">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: June 18, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">1. Scope of Service</h2>
              <p>
                Apply is an application assistance service. We are not a direct employer, nor are we a staffing agency that guarantees job placement. By using our service, you acknowledge that hiring decisions remain at the sole discretion of the prospective employer.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">2. User Representations</h2>
              <p><strong>Truthfulness:</strong> You warrant that all information provided in your resume and profile is accurate and truthful. Providing false information is a violation of these terms and may lead to termination of the contractual relationship between you and Apply.</p>
              <p><strong>Authorization:</strong> You grant Apply a non-exclusive, royalty-free license to use, process, and transmit your resume data to prospective employers or third-party job boards for the purpose of submitting applications.</p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">3. Limitation of Liability</h2>
              <p>To the maximum extent permitted by Nigerian law, Apply shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any failure to secure employment.</li>
                <li>Any actions, delays, or omissions by third-party employers or recruitment portals.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">4. Compliance & Licensing</h2>
              <p>
                You acknowledge that Apply operates in accordance with Nigerian labour regulations. Where our activities constitute "recruitment services," we maintain compliance with the Federal Ministry of Labour and Employment requirements.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">5. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms shall first be attempted to be resolved through amicable negotiation. If unresolved, the dispute shall be referred to arbitration in Lagos, Nigeria, in accordance with the Arbitration and Mediation Act.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">6. Termination</h2>
              <p>
                We reserve the right to restrict, suspend, or terminate your access to our platform if we reasonably suspect misuse, fraud, or non-compliance with the NDPA 2023 or these Terms.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
