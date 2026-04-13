import { div } from 'framer-motion/m';
import Image from 'next/image';

const benefits = [
  'Proven Track Record of Delivering Results',
  'Flexible Engagement Models & Rapid Onboarding',
  'Expertise in AI, Blockchain, Cloud, and Quality Assurance',
  'Clear, Transparent Pricing with No Hidden Costs',
  'Full-End Ownership of Projects from Start to Finish',
];

export default function AboutCompany() {
  return (
    <section className="pt-12 pb-24 bg-black relative" style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Partner with{' '}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
              CodeXpace
            </span>
            ?
          </h2>
          
          <div className='grid md:grid-cols-2 gap-8'>

           <div className='flex justify-center'>
            {/* Benefits */}
            <div className="space-y-4 border border-red-500/30 rounded-xl
                  bg-black/30 backdrop-blur-md
                  shadow-md shadow-red-500/10 w-fit px-8 py-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2.5"></div>
                  <p className="text-white text-base leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
           </div>

            <div className="grid sm:grid-cols-2 gap-8">
              
              <div className='flex flex-col items-center'>
                <h3 className="text-[50px] font-bold text-red-500 mb-4">300+</h3>
                <p className="text-gray-300 leading-relaxed">Successful Projects</p>
              </div>

              <div className='flex flex-col items-center'>
                <h3 className="text-[50px] font-bold text-red-500 mb-4">23+</h3>
                <p className="text-gray-300 leading-relaxed">Countries Supported</p>
              </div>

              <div className='flex flex-col items-center'>
                <h3 className="text-[50px] font-bold text-red-500 mb-4">8+</h3>
                <p className="text-gray-300 leading-relaxed">Years of Enablement Experience</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
