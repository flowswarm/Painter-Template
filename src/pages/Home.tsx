import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
const PROJECTS = [
  {
    id: 1,
    title: "EXTERIOR RESTORATION",
    category: "Exterior",
    scope: "Full facade repaint",
    location: "Home Exterior",
    beforeImage: "/images/services/ExteriorRestorationBefore.jpg",
    afterImage: "/images/services/ExteriorRestorationAfter.jpg",
    imageAlt: "Home exterior before and after painting",
    serviceId: "exterior-restoration"
  },
  {
    id: 2,
    title: "DECK REVIVAL",
    category: "Exterior",
    scope: "Wood restoration & staining",
    location: "Backyard Deck",
    beforeImage: "/images/services/DeckRevivalBefore.jpg",
    afterImage: "/images/services/DeckRevivalAfter.jpg",
    imageAlt: "Deck before and after staining",
    serviceId: "deck-revival"
  },
  {
    id: 3,
    title: "MODERN FACADE",
    category: "Exterior",
    scope: "Color update and trim",
    location: "Home Exterior",
    beforeImage: "/images/services/ModernFacadeBefore.jpg",
    afterImage: "/images/services/ModernFacadeAfter.jpg",
    imageAlt: "Home exterior color update",
    serviceId: "exterior-restoration"
  },
  {
    id: 4,
    title: "OUTDOOR LIVING",
    category: "Exterior",
    scope: "Deck refinishing",
    location: "Patio Deck",
    beforeImage: "/images/services/OutdoorLivingBefore.jpg",
    afterImage: "/images/services/OutdoorLivingAfter.jpg",
    imageAlt: "Deck refinishing before and after",
    serviceId: "deck-revival"
  },
  {
    id: 5,
    title: "INTERIOR RENEWAL",
    category: "Interior",
    scope: "Room color transformation",
    location: "Living Room",
    beforeImage: "/images/services/InteriorRenewalBefore.jpg",
    afterImage: "/images/services/InteriorRenewalAfter.jpg",
    imageAlt: "Interior room painting before and after",
    serviceId: "interior-renewal"
  }
];

const FEATURED = [
  {
    id: 1,
    title: "EXTERIOR SHUTTER REPAINT",
    image: "/images/featured/FeatureProjectExteriorShutterRepaint.jpg",
    linkId: "exterior-shutter-repaint"
  },
  {
    id: 2,
    title: "BATHROOM RENEWAL",
    image: "/images/featured/FeaturedProjectBathroomRenewal.jpg",
    linkId: "bathroom-renewal"
  },
  {
    id: 3,
    title: "COMMERCIAL BUILDING",
    image: "/images/featured/FeaturedProjectCommercialBuilding.jpg",
    linkId: "commercial-building"
  },
  {
    id: 4,
    title: "HOME COMPLETE REPAINT",
    image: "/images/featured/FeaturedProjectHomeCompleteRepaint.jpg",
    linkId: "home-complete-repaint"
  },
  {
    id: 5,
    title: "KITCHEN CABINETRY",
    image: "/images/featured/FeaturedProjectKitchenCabinetry.jpg",
    linkId: "kitchen-cabinetry"
  },
  {
    id: 6,
    title: "PORCH REVIVAL",
    image: "/images/featured/FeaturedProjectPorchRevival.jpg",
    linkId: "porch-revival"
  }
];

export function Home() {
  const heroRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const displayedProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="relative">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-brand-ink">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Luxury interior painting"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-display font-normal max-w-4xl mx-auto uppercase"
          >
            RC & Sons Painting
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="px-8 py-4 bg-white text-brand-ink text-[11px] uppercase tracking-widest font-bold hover:bg-brand-accent hover:text-white transition-colors duration-300 min-w-[200px] text-center">
              Request a Quote
            </Link>
            <a href="#projects" className="px-8 py-4 bg-transparent border border-white/30 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white/10 transition-colors duration-300 min-w-[200px] text-center">
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <h2 className="text-display uppercase">Works of <br /> Art</h2>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-sm text-brand-ink/60 leading-relaxed max-w-xs mb-8">
              Through precision and color, we craft environments that honor materiality, light, and the human experience.
            </p>
            <a href="#" className="text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 group hover:text-brand-accent transition-colors">
              View Bespoke <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-32 px-6 md:px-12 max-w-[1800px] mx-auto" id="projects">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar Filter */}
          <div className="md:col-span-3 space-y-12">
            <div className="text-[10px] uppercase tracking-widest font-bold border-b border-brand-ink/10 pb-4">Filter By Category:</div>

            <div className="border-b border-brand-ink/10 pb-6">
              <ul className="space-y-4 mt-4">
                {["All", "Exterior", "Interior"].map((category) => {
                  const projectCount = category === "All"
                    ? PROJECTS.length
                    : PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase()).length;

                  return (
                    <li
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`flex justify-between items-center text-[11px] cursor-pointer transition-colors ${activeFilter === category
                        ? "text-brand-accent font-bold"
                        : "text-brand-ink/60 hover:text-brand-ink"
                        }`}
                    >
                      <span className="uppercase tracking-widest">{category}</span>
                      <span className="text-[9px] opacity-60">{projectCount}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9 space-y-24">
            {displayedProjects.length === 0 ? (
              <div className="text-sm text-brand-ink/60 p-12 text-center border border-brand-ink/10">
                No projects found in this category.
              </div>
            ) : (
              displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="group"
                >
                  <div className="mb-8">
                    <BeforeAfterSlider
                      beforeMedia={project.beforeImage}
                      afterMedia={project.afterImage}
                      beforeAlt={`${project.title} Before`}
                      afterAlt={`${project.title} After`}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                      <h3 className="text-2xl font-normal mb-6">{project.title}</h3>
                      <div className="grid grid-cols-3 gap-12">
                        <div>
                          <div className="text-[8px] uppercase tracking-widest text-brand-ink/40 mb-1">Category</div>
                          <div className="text-[11px] font-medium">{project.category}</div>
                        </div>
                        <div>
                          <div className="text-[8px] uppercase tracking-widest text-brand-ink/40 mb-1">Scope</div>
                          <div className="text-[11px] font-medium">{project.scope}</div>
                        </div>
                        <div>
                          <div className="text-[8px] uppercase tracking-widest text-brand-ink/40 mb-1">Location</div>
                          <div className="text-[11px] font-medium">{project.location}</div>
                        </div>
                      </div>
                    </div>
                    <Link to={`/services/${project.serviceId}`} className="text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 group/link hover:text-brand-accent transition-colors">
                      View Detail <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )))}
          </div>
        </div>
      </section>

      {/* Featured Projects Slider Section */}
      <section className="py-32 bg-white" id="featured-projects">
        <div className="px-6 md:px-12 max-w-[1800px] mx-auto mb-16">
          <div className="flex justify-between items-end">
            <h2 className="text-display uppercase max-w-2xl">Defining Design Through Our Featured Projects</h2>
            <p className="text-sm text-brand-ink/60 leading-relaxed max-w-xs hidden md:block">
              From residences to large-scale developments, each work reflects our commitment to excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 pb-12">
          {FEATURED.map((item) => (
            <Link to={`/projects/${item.linkId}`} key={item.id} className="group cursor-pointer block">
              <div className="overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center group-hover:text-brand-accent transition-colors">
                <span className="text-[11px] uppercase tracking-widest font-bold">{item.title}</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                  View Project <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Discover Our World Gallery */}
      <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto bg-[#eef5f5]">
        <div className="flex justify-between items-end mb-12">
          <span className="text-sm font-bold tracking-widest uppercase text-[#0a1b2a]">004</span>
          <h2 className="text-5xl md:text-7xl font-playball text-[#0a1b2a] max-w-2xl text-right">Discover Our Work</h2>
        </div>

        {/* 
          Restructuring grid to match symmetrical reference:
          Column 1: Video (tall) -> Small Photo -> Video (tall)
          Column 2: Text Box -> Tall Photo -> Small Photo -> Text box 
          Column 3: Video (tall) -> Small Photo -> Video (tall)
          Column 4: Small Photo -> Text Box -> Tall photo
        */}
        {/* 
          Symmetrical Grid Layout (Based on reference photo)
          Col 1: Tall Video
          Col 2: Text Block (top) + Short Square Image (bottom)
          Col 3: Tall Video
          Col 4: Short Square Image (top) + Text Block (bottom)
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-[#0a1b2a]">

          {/* Col 1: Regular Tall Video (Aspect Ratio 9:16 approx) */}
          <div className="col-span-1 relative overflow-hidden aspect-[3/4] md:aspect-[2/3]">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/images/gallery/vid1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Col 2: Text Top, Image Bottom */}
          <div className="col-span-1 flex flex-col gap-4 h-full">
            <div className="flex-1 flex flex-col justify-start p-6 bg-transparent">
              <Link to="/contact" className="block group/link">
                <p className="text-lg md:text-xl font-light leading-tight group-hover/link:text-brand-accent transition-colors duration-300">
                  RC & Sons is a specialist in residential transformations.
                </p>
              </Link>
            </div>
            <div className="w-full aspect-square overflow-hidden relative group">
              <img src="/images/gallery/img1.jpg" alt="Painting in progress" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Col 3: Tall Video */}
          <div className="col-span-1 relative overflow-hidden aspect-[3/4] md:aspect-[2/3]">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/images/gallery/vid2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Col 4: Image Top, Text Bottom */}
          <div className="col-span-1 flex flex-col gap-4 h-full">
            <div className="w-full aspect-square overflow-hidden relative group">
              <img src="/images/gallery/img2.jpg" alt="Home exterior" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex-1 flex items-end p-6 bg-transparent">
              <Link to="/contact" className="block w-full group/link">
                <p className="text-base font-light leading-tight group-hover/link:text-brand-accent transition-colors duration-300">
                  Book your project anywhere you like.
                </p>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Reviews />

      <Footer />
    </div>
  );
}

export default Home;
