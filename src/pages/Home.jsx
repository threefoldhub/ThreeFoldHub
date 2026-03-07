// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, Zap } from 'lucide-react';
import FadeUp from '../components/ui/FadeUp';
import Button from '../components/ui/Button';

const Home = () => {
  const services = [
    {
      title: "Business Websites",
      desc: "Clean, modern websites tailored to your local business needs and goals.",
      icon: <Monitor className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
    },
    {
      title: "Website Redesign",
      desc: "Modernize your outdated website with a fresh, professional look and feel.",
      icon: <Smartphone className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
    },
    {
      title: "Landing Pages",
      desc: "High-converting pages designed specifically for your marketing promotions.",
      icon: <Zap className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
    }
  ];

  const process = [
    {
      num: "01",
      title: "Discovery",
      desc: "We dive deep into your business goals, target audience, and unique value proposition."
    },
    {
      num: "02",
      title: "Design",
      desc: "Crafting a bespoke visual identity and layout that resonates with your brand."
    },
    {
      num: "03",
      title: "Development",
      desc: "Building a lightning-fast, responsive website using modern web technologies."
    },
    {
      num: "04",
      title: "Launch",
      desc: "Deploying your site with precision and ensuring everything is optimized for success."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-black/5 blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 max-w-2xl">
            <FadeUp>
              <h1 className="text-6xl md:text-8xl font-heading font-semibold tracking-tight leading-[1.05] text-balance mb-8">
                Websites That Help Local Businesses <span className="text-gray-400 italic font-medium relative inline-block">Grow.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 h-[4px] bg-accent"
                /></span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed mb-12 text-balance">
                We design fast, modern websites for shops, clinics, cafés, gyms and small businesses that want to stand out online.
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button to="/works">View Our Work</Button>
              <Button to="/contact" variant="secondary">Get a Website</Button>
            </FadeUp>
          </div>

          <div className="hidden md:flex md:w-1/2 justify-center relative">
            <FadeUp delay={0.3} className="relative w-full max-w-lg aspect-square">
              {/* Modern Abstract Web Design Illustration */}
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-700">
                <rect x="50" y="50" width="300" height="300" rx="40" fill="#f8f7f4" stroke="#e5e5e5" strokeWidth="2"/>
                <rect x="50" y="50" width="300" height="60" rx="40" fill="#111111"/>
                <rect x="50" y="50" width="300" height="60" fill="#111111" clipPath="inset(0 0 50% 0)"/>
                <circle cx="80" cy="80" r="6" fill="#ff5f56"/>
                <circle cx="100" cy="80" r="6" fill="#ffbd2e"/>
                <circle cx="120" cy="80" r="6" fill="#27c93f"/>
                
                <rect x="90" y="140" width="220" height="20" rx="10" fill="#e5e5e5"/>
                <rect x="90" y="180" width="140" height="15" rx="7.5" fill="#f0f0f0"/>
                <rect x="90" y="210" width="180" height="15" rx="7.5" fill="#f0f0f0"/>
                
                <rect x="90" y="260" width="100" height="40" rx="20" fill="#E63946"/>
                <rect x="210" y="260" width="80" height="40" rx="20" fill="#111111"/>
                
                <circle cx="330" cy="220" r="40" fill="#E63946" stroke="#ffffff" strokeWidth="8"/>
                <rect x="30" y="160" width="60" height="60" rx="15" fill="#ffffff" stroke="#e5e5e5" strokeWidth="2"/>
                <path d="M45 190L55 200L75 180" stroke="#111111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-16">
              What We Offer
            </h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="group p-10 h-full rounded-4xl bg-(--color-bg-base) border border-black/5 hover:border-black/10 hover-lift relative overflow-hidden transition-colors">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-medium mb-4">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">{service.desc}</p>
                  
                  {/* Subtle animated background shape */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-black/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <FadeUp>
                  <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">
                    How We Work
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed text-balance">
                    A streamlined, transparent process designed to get your business online quickly and beautifully.
                  </p>
                </FadeUp>
              </div>
            </div>
            
            <div className="md:w-2/3 flex flex-col gap-12">
              {process.map((step, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="flex gap-8 group">
                    <div className="text-2xl font-mono text-gray-300 font-medium group-hover:text-accent transition-colors pt-1">
                      {step.num}
                    </div>
                    <div className="pb-12 border-b border-black/10 group-hover:border-black/20 transition-colors grow">
                      <h3 className="text-3xl font-heading font-medium mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Ready CTA */}
      <section className="py-32 bg-primary text-white rounded-[3rem] mx-4 md:mx-12 my-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
              Ready to elevate your business?
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12">
              Let's create a digital experience that converts visitors into loyal customers.
            </p>
            <Button to="/contact" variant="secondary" className="border-none mt-4 hover:shadow-2xl">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Home;
