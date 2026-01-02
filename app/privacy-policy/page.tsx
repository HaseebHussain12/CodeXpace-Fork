import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Privacy{' '}
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-gray-400 text-sm">Last Updated: 02 January 2026</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Introduction</h2>
                <p className="text-base leading-relaxed">
                  CODEXPACE LLC ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with www.codexpace.com.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
                <p className="text-base leading-relaxed mb-2">We may collect the following information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, phone number</li>
                  <li>Company details and project information</li>
                  <li>Billing and transaction details</li>
                  <li>Technical data such as IP address, browser type, and usage behavior</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
                <p className="text-base leading-relaxed mb-2">Your information is used strictly to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and manage our services</li>
                  <li>Communicate regarding projects, support, or updates</li>
                  <li>Improve our products and user experience</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">No Selling or Unauthorized Marketing</h2>
                <p className="text-base leading-relaxed mb-2">We DO NOT:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sell, rent, or trade personal data to third parties</li>
                  <li>Share data for unauthorized marketing purposes</li>
                  <li>Send promotional messages or SMS without explicit user consent</li>
                </ul>
                <p className="text-base leading-relaxed mt-3">
                  Any communication sent by us is service-related, transactional, or explicitly opted-in by the user.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Data Protection & Security</h2>
                <p className="text-base leading-relaxed">
                  We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
                <p className="text-base leading-relaxed">
                  We may use trusted third-party tools for hosting, analytics, or operations. These providers are contractually obligated to protect your data and use it only for authorized purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
                <p className="text-base leading-relaxed mb-2">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent for communications</li>
                </ul>
                <p className="text-base leading-relaxed mt-3">
                  Requests can be sent to: <a href="mailto:support@codexpace.com" className="text-red-400 hover:text-red-300">support@codexpace.com</a>
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

