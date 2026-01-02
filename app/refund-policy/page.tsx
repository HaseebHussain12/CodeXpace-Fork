import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Refund{' '}
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-gray-400 text-sm">Last Updated: 02 January 2026</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">No Refund Policy</h2>
                <p className="text-base leading-relaxed">
                  At CODEXPACE LLC, all payments made for our services, subscriptions, digital products, or solutions are final and non-refundable.
                </p>
                <p className="text-base leading-relaxed mt-3">
                  By accessing our website (www.codexpace.com), signing an agreement, approving a proposal, or making a payment, you expressly acknowledge and agree that no refunds, cancellations, or reversals will be provided under any circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Scope of Non-Refundable Services</h2>
                <p className="text-base leading-relaxed mb-2">This policy applies to, but is not limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Software development services</li>
                  <li>Web and mobile application development</li>
                  <li>IT consulting and technical advisory services</li>
                  <li>SaaS platforms and subscriptions</li>
                  <li>UI/UX design services</li>
                  <li>Maintenance, support, and optimization services</li>
                  <li>Digital products, licenses, and downloadable content</li>
                  <li>Setup, onboarding, discovery, or advance payments</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Service Initiation</h2>
                <p className="text-base leading-relaxed">
                  Once a payment is confirmed, resources, planning, development time, and operational costs are immediately allocated, making refunds impractical and impossible.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Disputes & Unauthorized Claims</h2>
                <p className="text-base leading-relaxed mb-2">Any attempt to reverse a payment without prior written communication with CODEXPACE LLC may result in:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Immediate service suspension</li>
                  <li>Permanent account termination</li>
                  <li>Legal action to recover losses and damages</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                <p className="text-base leading-relaxed">
                  For billing-related questions, please contact: <a href="mailto:support@codexpace.com" className="text-red-400 hover:text-red-300">support@codexpace.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

