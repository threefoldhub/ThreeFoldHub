import FadeUp from '../components/ui/FadeUp';
import { CardStack } from '../components/ui/CardStack';

const works = [
  {
    id: 1,
    title: "Gym & Fitness",
    description: "Bold and energetic design for a local gym.",
    href: "/demo/gym",
    imageSrc: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Artisan Café",
    description: "Warm and cozy aesthetic for a local coffee shop.",
    href: "/demo/cafe",
    imageSrc: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Beauty Salon",
    description: "Elegant and clean design for a high-end salon.",
    href: "/demo/salon",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Medical Clinic",
    description: "Trustworthy and professional medical design.",
    href: "/demo/clinic",
    imageSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  }
];

const Works = () => {
  return (
    <div className="w-full min-h-screen bg-bg-base overflow-x-hidden">
      <section className="pt-40 pb-10 px-6 max-w-7xl mx-auto text-center">
        <FadeUp>
          <h1 className="text-5xl md:text-8xl font-heading font-medium tracking-tighter mb-8 text-balance">
            Our Work <span className="text-primary/30">& Demos</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary/60 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Explore our handcrafted designs specifically crafted to help local businesses stand out and grow.
          </p>
        </FadeUp>
      </section>

      <section className="py-20 flex flex-col items-center justify-center w-full overflow-hidden">
        <FadeUp delay={0.2} className="w-full relative">
          <CardStack items={works} />
        </FadeUp>
      </section>
      
      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  );
};

export default Works;
