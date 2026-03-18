import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="relative bg-brand-bg min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full bg-brand-ink overflow-hidden flex items-center justify-center">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full relative z-0"
                >
                    <img
                        src="/images/AboutHero.jpg"
                        alt="About RC & Sons Painting"
                        loading="lazy"
                        className="w-full h-auto block"
                    />
                </motion.div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pt-16 md:pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-white text-display font-normal uppercase"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-white/80 mt-2 md:mt-6 max-w-lg mx-auto text-xs md:text-sm tracking-widest uppercase font-semibold"
                    >
                        Family owned & operated for 35 years
                    </motion.p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-playball text-brand-ink mb-8">A Legacy of Excellence</h2>
                        <div className="space-y-6 text-brand-ink/70 leading-relaxed">
                            <p>
                                RC & Sons Painting has been a proud, family-owned and operated business for 35 years.
                                Rooted in New Castle, DE, our journey began with a simple commitment: providing our neighbors
                                with unparalleled craftsmanship and trustworthy service.
                            </p>
                            <p>
                                We offer you a professional, personal experience from the initial prep work to the final finish.
                                Understanding that your home is your most valuable asset, we treat every project as if we were painting
                                our own house—with meticulous attention to detail, respectful communication, and a dedication to durability.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[4/5] shadow-2xl"
                    >
                        <img
                            src="/images/AboutImage.jpg"
                            alt="Our team working"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Award & Core Values Section */}
            <section className="py-24 bg-brand-ink text-white px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1 relative aspect-square md:aspect-auto md:h-[600px] bg-white p-4"
                    >
                        <img
                            src="/images/ChoiceAwardWinner2025About.jpg"
                            alt="Nextdoor Neighborhood Fave 2025"
                            loading="lazy"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    <div className="order-1 md:order-2 space-y-12">
                        <div>
                            <h3 className="text-3xl font-playball mb-4">Recognized by Our Community</h3>
                            <p className="text-white/70 leading-relaxed">
                                Our dedication to pristine results and customer satisfaction hasn't gone unnoticed.
                                We are incredibly honored to be named a 2025 Award Winner, a testament to the trust our
                                clients place in us year after year.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm uppercase tracking-widest font-bold mb-3 border-b border-white/20 pb-2">Experience</h4>
                                <p className="text-white/60 text-sm">35 years of refining our craft to deliver exceptional longevity and beauty.</p>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-widest font-bold mb-3 border-b border-white/20 pb-2">Family Owned</h4>
                                <p className="text-white/60 text-sm">Personal investment in every project. You work directly with the owners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Video & Visuals layout */}
            <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-display uppercase max-w-2xl text-brand-ink">Teamwork and Family Oriented</h2>
                </div>

                <div className="flex justify-center h-auto lg:h-[700px]">
                    {/* Centered Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-4xl relative overflow-hidden h-[400px] lg:h-full shadow-2xl"
                    >
                        <img
                            src="/images/About1.jpg"
                            alt="Detail work"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
