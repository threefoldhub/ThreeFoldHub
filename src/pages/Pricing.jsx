import FadeUp from '../components/ui/FadeUp';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹7,999",
      desc: "Perfect for small shops that need a simple professional website.",
      features: ["3 page website", "Mobile responsive", "Contact form", "Basic SEO"],
      buttonText: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      price: "₹14,999",
      desc: "Best for growing businesses needing a strong presence.",
      features: ["Up to 6 pages", "Custom design", "Animations", "Mobile optimization", "SEO ready"],
      buttonText: "Most Popular",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "₹29,999",
      desc: "Ideal for businesses that want a strong online presence.",
      features: ["Unlimited pages", "Advanced animations", "Performance optimization", "Premium design"],
      buttonText: "Elevate Brand",
      highlight: false
    },
    {
      name: "Custom",
      price: "Let's Talk",
      desc: "For businesses that need a tailored solution with special features.",
      features: ["Fully custom website", "Advanced integrations", "Special features", "Priority support"],
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
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Premium quality websites without the enterprise price tag.
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
