import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";


export default function Services() {
    return (
        <div className="relative bg-[#eef5f5] text-brand-ink min-h-screen">
            <Header />

            {/* Services Header */}
            <section className="pt-48 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-bold tracking-widest uppercase mb-4 block">Our Expertise</span>
                    <h1 className="text-display font-playball text-6xl md:text-8xl mb-6">Signature Services</h1>
                    <p className="max-w-2xl mx-auto text-brand-ink/70 font-light text-lg">
                        We offer a comprehensive suite of interior and exterior painting solutions, executed with uncompromising quality and an eye for the finest details.
                    </p>
                </motion.div>
            </section>

            {/* Services List */}
            <section className="py-12 px-6 md:px-12 max-w-[1800px] mx-auto space-y-32 mb-32">
                {SERVICES.map((service, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                        >

                            {/* Text Content */}
                            <div className="flex-1 space-y-6 w-full lg:max-w-xl">
                                <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">0{index + 1}</span>
                                <h2 className="text-4xl md:text-5xl font-playball">{service.title}</h2>
                                <p className="text-brand-ink/70 font-light text-lg leading-relaxed">
                                    {service.shortDescription}
                                </p>
                                <div className="pt-4">
                                    <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group">
                                        View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Media Content */}
                            <div className="flex-1 w-full">
                                {service.listMediaType === "video" && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative aspect-[3/4] overflow-hidden group">
                                            <span className="absolute top-4 left-4 z-10 bg-brand-bg/80 px-3 py-1 text-[10px] uppercase font-bold tracking-widest mix-blend-screen text-brand-ink">Before</span>
                                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                                <source src={service.listBeforeMedia} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="relative aspect-[3/4] overflow-hidden group">
                                            <span className="absolute top-4 left-4 z-10 bg-brand-bg/80 px-3 py-1 text-[10px] uppercase font-bold tracking-widest mix-blend-screen text-brand-ink">After</span>
                                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                                <source src={service.listAfterMedia} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                )}

                                {service.listMediaType === "video-single" && (
                                    <div className="relative aspect-video overflow-hidden">
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                            <source src={service.listMedia} type="video/mp4" />
                                        </video>
                                    </div>
                                )}

                                {service.listMediaType === "mixed" && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative aspect-[3/4] overflow-hidden group">
                                            <span className="absolute top-4 left-4 z-10 bg-brand-bg/80 px-3 py-1 text-[10px] uppercase font-bold tracking-widest mix-blend-screen text-brand-ink">Before</span>
                                            <img src={service.listPoster} alt={`${service.title} before`} loading="lazy" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="relative aspect-[3/4] overflow-hidden group">
                                            <span className="absolute top-4 left-4 z-10 bg-brand-bg/80 px-3 py-1 text-[10px] uppercase font-bold tracking-widest mix-blend-screen text-brand-ink">After</span>
                                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                                <source src={service.listAfterMedia} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                )}

                                {service.listMediaType === "image" && (
                                    <div className="relative aspect-video shadow-2xl overflow-hidden">
                                        <BeforeAfterSlider
                                            beforeMedia={service.listBeforeMedia!}
                                            afterMedia={service.listAfterMedia!}
                                            beforeAlt={`${service.title} Before`}
                                            afterAlt={`${service.title} After`}
                                        />
                                    </div>
                                )}
                            </div>

                        </motion.div>
                    );
                })}
            </section>

            <Footer />
        </div>
    );
}
