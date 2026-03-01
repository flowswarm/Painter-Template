import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "NEW MAGS",
    category: "Interior",
    scope: "Full interior restoration",
    location: "Copenhagen",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Minimalist interior with warm wood shelving"
  },
  {
    id: 2,
    title: "NAGANO HQ",
    category: "Commercial",
    scope: "A harmonious of materials",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Modern office space with clean lines"
  },
  {
    id: 3,
    title: "LIEWOOD HQ",
    category: "Interior",
    scope: "Warm light and textures",
    location: "Denmark",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    imageAlt: "Softly lit interior with wooden furniture"
  }
];

const FEATURED = [
  {
    id: 1,
    title: "HOLMEN ABODE",
    image: "https://images.unsplash.com/photo-1600607687960-4a2123f74164?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "GJØVIK",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "RESTAURANT IRIS",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  }
];

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury interior painting" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-8"
          >
            Residential Excellence
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-display font-normal max-w-4xl mx-auto uppercase"
          >
            A Collection of <br /> Quiet Elegance
          </motion.h1>

          <div className="mt-24 grid grid-cols-3 gap-12 max-w-2xl mx-auto">
            {[
              { label: "Projects", icon: "M4 4h16v16H4z M4 8h16 M8 4v16" },
              { label: "Designs", icon: "M4 4h16v16H4z M12 4v16 M4 12h16" },
              { label: "Craft", icon: "M4 4h16v16H4z M4 12h16 M12 12h8" }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d={item.icon} />
                  </svg>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <h2 className="text-display uppercase">Works of Quiet <br /> Elegance</h2>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-sm text-black/60 leading-relaxed max-w-xs mb-8">
              Through precision and color, we craft environments that honor materiality, light, and the human experience.
            </p>
            <a href="#" className="text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 group">
              View Bespoke <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar Filter */}
          <div className="md:col-span-3 space-y-12">
            <div className="text-[10px] uppercase tracking-widest font-bold border-b border-black/10 pb-4">Filter:</div>
            
            {["Architecture", "Interior Design", "Finishes"].map((filter) => (
              <div key={filter} className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-center mb-6 cursor-pointer group">
                  <span className="text-[10px] uppercase tracking-widest font-bold">{filter}</span>
                  <span className="text-xs opacity-40 group-hover:opacity-100 transition-opacity">×</span>
                </div>
                <ul className="space-y-3">
                  {["Commercial", "Hospitality", "Residential"].map((sub, i) => (
                    <li key={sub} className="flex justify-between items-center text-[11px] text-black/40 hover:text-black cursor-pointer transition-colors">
                      <span>{sub}</span>
                      <span className="text-[9px]">{10 + i * 2}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="md:col-span-9 space-y-24">
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                  <div className="md:col-span-8 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.imageAlt} 
                      className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:col-span-4 overflow-hidden hidden md:block">
                    <img 
                      src={project.image} 
                      alt={project.imageAlt} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                  <div>
                    <h3 className="text-2xl font-normal mb-6">{project.title}</h3>
                    <div className="grid grid-cols-3 gap-12">
                      <div>
                        <div className="text-[8px] uppercase tracking-widest text-black/40 mb-1">Category</div>
                        <div className="text-[11px] font-medium">{project.category}</div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest text-black/40 mb-1">Scope</div>
                        <div className="text-[11px] font-medium">{project.scope}</div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest text-black/40 mb-1">Location</div>
                        <div className="text-[11px] font-medium">{project.location}</div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 group/link">
                    View Detail <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Slider Section */}
      <section className="py-32 bg-white">
        <div className="px-6 md:px-12 max-w-[1800px] mx-auto mb-16">
          <div className="flex justify-between items-end">
            <h2 className="text-display uppercase max-w-2xl">Defining Design Through Our Featured Projects</h2>
            <p className="text-sm text-black/60 leading-relaxed max-w-xs hidden md:block">
              From residences to large-scale developments, each work reflects our commitment to excellence.
            </p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto px-6 md:px-12 no-scrollbar pb-12">
          {FEATURED.map((item) => (
            <div key={item.id} className="min-w-[300px] md:min-w-[500px] group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] uppercase tracking-widest font-bold">{item.title}</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                  View Project <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <button className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=2000" 
            alt="Timeless interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-display uppercase mb-8">Let's Create Something Timeless</h2>
          <p className="text-sm text-white/80 mb-12 max-w-md mx-auto">
            We welcome collaborations, new commissions, and conversations about design.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all">
            Contact Us <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
