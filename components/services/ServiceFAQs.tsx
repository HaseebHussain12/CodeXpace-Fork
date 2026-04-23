'use client';

import { useState } from 'react';

const defaultFaqs = [
  {
    question: 'Can you upgrade our legacy web app?',
    answer: 'Yes, we specialize in modernizing legacy applications. We can upgrade your existing system to use modern technologies, improve performance, enhance security, and add new features while maintaining your current functionality.',
  },
  {
    question: 'How do you ensure security and compliance?',
    answer: 'We follow industry best practices for security, including regular security audits, code reviews, penetration testing, and compliance with standards like GDPR, HIPAA, and SOC 2. We implement security measures at every layer of your application.',
  },
  {
    question: 'What is your development timeline?',
    answer: 'Timelines vary based on project scope and complexity. We typically deliver MVPs in 4-8 weeks, while full-scale applications may take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout development.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support to ensure your application continues to perform optimally.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Django, AWS, Docker, Kubernetes, and more. We choose the best technology stack based on your specific project requirements.',
  },
];

const customSoftwareDevelopmentFaqs = [
  {
    question: 'What technologies do you use?',
    answer: 'We work with React, Angular, Node.js, Python, Java, .NET, AWS, Azure, and more.',
  },
  {
    question: 'What industries benefit from your custom software solutions?',
    answer: 'We serve finance, healthcare, logistics, e-commerce, education, and more.',
  },
];

const aiMachineLearningFaqs = [
  {
    question: 'Can you integrate AI into our current systems?',
    answer: 'Yes, our team specializes in integrating AI features and analytics into your existing software or cloud platforms.',
  },
  {
    question: 'What industries benefit from your AI solutions?',
    answer: 'We serve finance, healthcare, logistics, e-commerce, education, and more.',
  },
];

const blockchainFaqs = [
  {
    question: 'Can you build on our preferred blockchain?',
    answer: 'Yes, we support Ethereum, Cardano, Solana, and other major platforms.',
  },
  {
    question: 'Do you offer smart contract audits?',
    answer: 'Absolutely, security audits are part of every blockchain project we deliver.',
  },
];

const webDevelopmentFaqs = [
  {
    question: 'Can you upgrade our legacy web app?',
    answer: 'Yes, we modernize and scale existing platforms using the latest technologies.',
  },
  {
    question: 'How do you ensure security and compliance?',
    answer: 'We follow industry standards for data protection, regular audits, and secure coding practices.',
  },
];

const mobileAppDevelopmentFaqs = [
  {
    question: 'Can you build for both Android and iOS?',
    answer: 'Yes, we develop both native and cross-platform apps to reach all your users.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Absolutely, we offer maintenance, updates, and feature enhancements.',
  },
];

const devopsCloudFaqs = [
  {
    question: 'Can you migrate our on-premise apps to the cloud?',
    answer: 'Yes, we handle complete cloud migration with minimal disruption.',
  },
  {
    question: 'What cloud platforms do you support?',
    answer: 'We work with AWS, Azure, Google Cloud, and more.',
  },
];

const softwareTestingFaqs = [
  {
    question: 'Can you automate our testing processes?',
    answer: 'Yes, we implement test automation to improve efficiency and reduce manual effort.',
  },
  {
    question: 'Do you offer ongoing QA support?',
    answer: 'Absolutely, we provide maintenance and regression testing as your app evolves.',
  },
];

const mvpDevelopmentFaqs = [
  {
    question: 'Can you help refine my product idea?',
    answer: 'Yes, we offer workshops and consultations to validate and focus your MVP.',
  },
  {
    question: 'How fast can you launch an MVP?',
    answer: 'We typically deliver MVPs in as little as 4-8 weeks, depending on complexity.',
  },
];

const enterpriseSoftwareDevelopmentFaqs = [
  {
    question: 'Can you integrate with our legacy systems?',
    answer: 'Yes, we specialize in seamless integration with both legacy and modern enterprise platforms.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Absolutely, we offer continuous support and feature updates as your business evolves.',
  },
];

const saasDevelopmentFaqs = [
  {
    question: 'Can you build a scalable multi-tenant SaaS platform?',
    answer: 'Yes, we design and develop scalable multi-tenant architectures that efficiently serve multiple customers while maintaining data isolation and performance.',
  },
  {
    question: 'Do you handle subscription billing and payment integration?',
    answer: 'Absolutely, we integrate subscription management systems and payment gateways to handle recurring billing, upgrades, downgrades, and cancellations seamlessly.',
  },
];

const graphicDesigningFaqs = [
  {
    question: 'What file formats do you deliver?',
    answer: 'We provide designs in all standard formats including PNG, JPG, PDF, SVG, and source files (AI, PSD, Figma) based on your project needs.',
  },
  {
    question: 'Do you offer design revisions?',
    answer: 'Yes, we include multiple revision rounds in our design process to ensure the final output meets your vision and brand requirements perfectly.',
  },
];

const uiUxDesigningFaqs = [
  {
    question: 'Do you conduct user research before designing?',
    answer: 'Absolutely, we start with comprehensive user research including interviews, surveys, and competitor analysis to create designs that truly resonate with your target audience.',
  },
  {
    question: 'Can you create interactive prototypes?',
    answer: 'Yes, we build high-fidelity interactive prototypes using tools like Figma and Adobe XD to test user flows and gather feedback before development begins.',
  },
];

const itConsultationFaqs = [
  {
    question: 'What areas do you consult on?',
    answer: 'We provide strategic guidance on technology selection, infrastructure assessment, digital transformation, cloud migration, security, and IT roadmap planning.',
  },
  {
    question: 'Do you provide ongoing consultation support?',
    answer: 'Yes, we offer both one-time assessments and ongoing advisory services to help you make informed technology decisions as your business evolves.',
  },
];

interface ServiceFAQsProps {
  slug?: string;
}

export default function ServiceFAQs({ slug }: ServiceFAQsProps) {
  let faqs = defaultFaqs;
  if (slug === 'custom-software-development') {
    faqs = customSoftwareDevelopmentFaqs;
  } else if (slug === 'ai-machine-learning-development') {
    faqs = aiMachineLearningFaqs;
  } else if (slug === 'blockchain-development') {
    faqs = blockchainFaqs;
  } else if (slug === 'web-development' || slug === 'front-backend-development') {
    faqs = webDevelopmentFaqs;
  } else if (slug === 'mobile-app-development' || slug === 'android-ios-app-development') {
    faqs = mobileAppDevelopmentFaqs;
  } else if (slug === 'devops-cloud-services') {
    faqs = devopsCloudFaqs;
  } else if (slug === 'software-testing') {
    faqs = softwareTestingFaqs;
  } else if (slug === 'mvp-development') {
    faqs = mvpDevelopmentFaqs;
  } else if (slug === 'enterprise-software-development') {
    faqs = enterpriseSoftwareDevelopmentFaqs;
  } else if (slug === 'saas-development') {
    faqs = saasDevelopmentFaqs;
  } else if (slug === 'graphic-designing') {
    faqs = graphicDesigningFaqs;
  } else if (slug === 'ui-ux-designing') {
    faqs = uiUxDesigningFaqs;
  } else if (slug === 'it-consultation') {
    faqs = itConsultationFaqs;
  }
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            FAQs
          </span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-500/70"
              style={{
                boxShadow: '0 4px 16px rgba(220, 38, 38, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-red-500 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-base text-gray-300 leading-relaxed max-[580px]:text-[15px]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


