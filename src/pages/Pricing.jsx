import FadeUp from '../components/ui/FadeUp';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹4,999",
      desc: "Perfect for a simple, professional single-page presence.",
      features: [
        "Landing Page", 
        "Mobile responsive", 
        "Services, Contact, Location", 
        "Basic SEO, Optimised",
        "3-5 Days Delivery"
      ],
      buttonText: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      price: "₹12,999",
      desc: "Best for growing businesses needing a strong multi-page presence.",
      features: [
        "Up to 6-7 pages", 
        "Premium Design", 
        "Whatsapp Integration", 
        "Mobile responsive & SEO",
        "Fast Delivery"
      ],
      buttonText: "Most Popular",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "₹24,999",
      desc: "Ideal for businesses that want a fully loaded digital experience.",
      features: [
        "Everything in Professional",
        "Chatbot Integration", 
        "CMS setup for Blogs", 
        "Advanced SEO & Analytics",
        "Priority Support"
      ],
      buttonText: "Elevate Brand",
      highlight: false
    },
    {
      name: "Custom",
      price: "Custom",
      desc: "Send a request and our team will contact you for further enquiries.",
      features: [
        "Fully tailored architecture", 
        "Advanced Integrations", 
        "Dedicated Team", 
        "E-commerce capabilities",
        "Ongoing Maintenance"
      ],
      buttonText: "Request Quote",
      highlight: false
    }
  ];

  return (
    <div className="w-full">
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <FadeUp>
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-4">
            Premium quality websites without the enterprise price tag.
          </p>
          <p className="text-sm font-medium text-accent">
            * Domain (Charges applicable) + Add-ons apply to all plans.
          </p>
        </FadeUp>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
             <FadeUp key={idx} delay={idx * 0.1}>
                <div className={`h-full relative rounded-[2.5rem] p-10 flex flex-col border hover-lift transition-all duration-500 ${
                  plan.highlight 
                  ? 'bg-primary text-white border-primary shadow-2xl scale-105 z-10' 
                  : 'bg-white text-primary border-black/10'
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 text-sm font-medium rounded-full">
                      Recommended
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className={`text-2xl font-heading font-medium mb-4 ${plan.highlight ? 'text-white' : 'text-primary'}`}>{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-heading font-semibold">{plan.price}</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="grow mb-10">
                    <ul className="flex flex-col gap-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm">
                          <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-white/80' : 'text-primary/70'}`} />
                          <span className={plan.highlight ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    to="/contact" 
                    variant={plan.highlight ? "accent" : "secondary"} 
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
             </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
