import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getServiceById } from "../data/services";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";

export default function ServiceDetail() {
    const { serviceId } = useParams();
    const service = getServiceById(serviceId || "");

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="min-h-screen bg-brand-bg flex items-center justify-center text-brand-ink">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-playball">Service Not Found</h1>
                    <p className="font-light">The service you're looking for doesn't exist.</p>
                    <Link to="/services" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
                        Return to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative bg-[#eef5f5] text-brand-ink min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden mt-20">
                <motion.div
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-ink/40"></div>
                </motion.div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 text-brand-bg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block drop-shadow-md">
                            {service.category}
                        </span>
                        <h1 className="text-display font-playball text-5xl md:text-8xl mb-6 drop-shadow-lg max-w-5xl">
                            {service.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Deep Dive */}
            <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group mb-12">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-5xl font-playball mb-6 leading-tight">
                            {service.shortDescription}
                        </h2>
                        <div className="pt-8">
                            <Link to="/contact" className="inline-block bg-brand-ink text-brand-bg px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors">
                                {service.ctaText}
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <p className="text-brand-ink/80 font-light text-lg md:text-xl leading-relaxed">
                            {service.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section (if applicable) */}
            {(service.galleryImages.length > 0 || service.galleryVideos.length > 0) && (
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-[1800px] mx-auto">
                        <h3 className="text-2xl font-playball mb-12 text-center text-brand-ink">Project Gallery</h3>

                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {/* Render Videos First */}
                            {service.galleryVideos.map((videoSrc, idx) => (
                                <div key={`vid-container-${serviceId}-${idx}`} className="break-inside-avoid relative overflow-hidden group">
                                    <video
                                        key={`vid-${serviceId}-${idx}`}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    >
                                        <source src={videoSrc} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            ))}

                            {/* Render Images Second */}
                            {service.galleryImages.map((imgSrc, idx) => (
                                <div key={`img-${idx}`} className="break-inside-avoid relative overflow-hidden group">
                                    <img
                                        src={imgSrc}
                                        alt={`${service.title} detail ${idx + 1}`}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            ))}
                        </div>

                        {/* Center CTA after gallery */}
                        <div className="flex justify-center mt-20">
                            <Link to="/contact" className="inline-block border border-brand-ink text-brand-ink px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-ink hover:text-brand-bg transition-colors">
                                {service.ctaText}
                            </Link>
                        </div>

                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
