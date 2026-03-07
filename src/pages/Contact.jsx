import FadeUp from '../components/ui/FadeUp';
import Button from '../components/ui/Button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full">
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <div className="flex flex-col justify-center">
            <FadeUp>
              <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
                Let's start<br />a conversation.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-md leading-relaxed mb-12">
                Ready to build a premium website for your local business? We'd love to hear from you.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="flex flex-col gap-8">
              <a href="mailto:hubthreefold@gmail.com" className="flex items-center gap-4 group">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/10 group-hover:border-black/30 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <span className="text-lg font-medium group-hover:text-accent transition-colors">hubthreefold@gmail.com</span>
              </a>
              <a href="tel:+91 9980157156" className="flex items-center gap-4 group">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/10 group-hover:border-black/30 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <span className="text-lg font-medium group-hover:text-accent transition-colors">+91 99801 57156</span>
              </a>
              <a href="https://wa.me/919980157156" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/10 group-hover:border-black/30 hover:bg-[#25D366] hover:border-[#25D366] transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                 </div>
                 <span className="text-lg font-medium group-hover:text-[#25D366] transition-colors">WhatsApp Us</span>
              </a>
            </FadeUp>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-black/5 shadow-xl shadow-black/[0.02]">
            <FadeUp delay={0.3}>
              <h3 className="text-2xl font-heading font-medium mb-8">Send us a message</h3>
              <form action="https://formsubmit.co/hubthreefold@gmail.com" method="POST" className="flex flex-col gap-6">
                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable captcha for seamless experience (optional, but requested by some) */}
                <input type="hidden" name="_captcha" value="false" />

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-600">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-[var(--color-bg-base)] border border-transparent focus:border-black/20 focus:bg-white rounded-xl px-4 py-4 outline-none transition-all"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required
                    className="w-full bg-[var(--color-bg-base)] border border-transparent focus:border-black/20 focus:bg-white rounded-xl px-4 py-4 outline-none transition-all"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-600">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-[var(--color-bg-base)] border border-transparent focus:border-black/20 focus:bg-white rounded-xl px-4 py-4 outline-none transition-all resize-none"
                    placeholder="Tell us about your business..."
                  />
                </div>
                {/* Redirect back to contact page after submission */}
                <input type="hidden" name="_next" value="/contact" />
                
                <button type="submit" className="w-full mt-4 px-6 py-4 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors hover-lift">
                  Send Message
                </button>
              </form>
            </FadeUp>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
