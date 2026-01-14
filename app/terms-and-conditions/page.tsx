import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Terms and{" "}
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>
              <p className="text-gray-400 text-sm">
                Last Updated: 02 January 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Acceptance of Terms
                </h2>
                <p className="text-base leading-relaxed">
                  By accessing www.codexpace.com, signing a contract, approving
                  a proposal, or making a payment, you agree to be bound by
                  these Terms and Conditions.
                </p>
                <p className="text-base leading-relaxed mt-3">
                  If you do not agree, you must discontinue use of our services
                  immediately.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Services
                </h2>
                <p className="text-base leading-relaxed">
                  CODEXPACE provides software development, IT consulting,
                  digital solutions, and related services. Service scope,
                  timelines, and deliverables are defined in written agreements
                  or proposals.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Payments & Refunds
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    All payments are non-refundable once an agreement is
                    approved or payment is made.
                  </li>
                  <li>
                    No refunds are issued for partial work, delays,
                    dissatisfaction, or change of mind.
                  </li>
                  <li>
                    Payments confirm your acceptance of service scope and terms.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Intellectual Property
                </h2>
                <p className="text-base leading-relaxed">
                  All custom work remains the property of CODEXPACE until full
                  payment is received. Upon payment completion, ownership rights
                  are transferred as per the agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Client Responsibilities
                </h2>
                <p className="text-base leading-relaxed mb-2">
                  Clients agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate information and timely feedback</li>
                  <li>Cooperate during project execution</li>
                  <li>
                    Avoid illegal, abusive, or unethical use of our services
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Limitation of Liability
                </h2>
                <p className="text-base leading-relaxed mb-2">
                  CODEXPACE shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Business losses, data loss, or profit loss</li>
                  <li>
                    Delays caused by third parties or force majeure events
                  </li>
                </ul>
                <p className="text-base leading-relaxed mt-3">
                  Our maximum liability shall never exceed the amount paid for
                  the service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Termination
                </h2>
                <p className="text-base leading-relaxed mb-2">
                  We reserve the right to suspend or terminate services if:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Terms are violated</li>
                  <li>Payments are disputed or reversed</li>
                  <li>Illegal or abusive activity is detected</li>
                </ul>
                <p className="text-base leading-relaxed mt-3">
                  No refunds will be provided upon termination.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Governing Law
                </h2>
                <p className="text-base leading-relaxed">
                  These Terms shall be governed by and interpreted in accordance
                  with the applicable laws of the jurisdiction under which
                  CODEXPACE is registered.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Contact Information
                </h2>
                <p className="text-base leading-relaxed">
                  <a
                    href="mailto:support@codexpace.com"
                    className="text-red-400 hover:text-red-300"
                  >
                    support@codexpace.com
                  </a>
                </p>
                <p className="text-base leading-relaxed mt-2">
                  <a
                    href="https://www.codexpace.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    https://www.codexpace.com
                  </a>
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
