import { useEffect } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Phone from "lucide-react/dist/esm/icons/phone";
import Mail from "lucide-react/dist/esm/icons/mail";
import Clock from "lucide-react/dist/esm/icons/clock";

export default function Contact() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative bg-[#eef5f5] text-brand-ink min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 bg-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img
                        src="/images/gallery/img1.jpg"
                        alt="Background"
                        loading="lazy"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>

                <div className="max-w-[1200px] mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-brand-accent">
                            Let's Connect
                        </span>
                        <h1 className="text-display font-playball text-5xl md:text-7xl lg:text-8xl mb-6">
                            Get in Touch
                        </h1>
                        <p className="max-w-2xl mx-auto text-brand-ink/70 font-light text-lg">
                            Whether you're ready to start your next painting project or just have a few questions,
                            our team at RC & Sons Painting is here to help. Reach out to us today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="flex-grow py-24 px-6 md:px-12">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-playball mb-8">Contact Information</h2>
                            <p className="text-brand-ink/70 font-light mb-10 leading-relaxed">
                                As a family-owned and operated business since 1992, we pride ourselves on exceptional customer
                                service and rapid response times. Give us a call or send an email, and we'll get back to you
                                as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-brand-ink/10 group-hover:border-brand-accent transition-colors">
                                    <MapPin className="text-brand-accent" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Location</h4>
                                    <p className="text-brand-ink/80 font-light">603 West Ave<br />New Castle, DE 19720</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-brand-ink/10 group-hover:border-brand-accent transition-colors">
                                    <Phone className="text-brand-accent" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Phone</h4>
                                    <a href="tel:3023676455" className="text-brand-ink/80 font-light hover:text-brand-accent transition-colors">
                                        (302) 367-6455
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-brand-ink/10 group-hover:border-brand-accent transition-colors">
                                    <Mail className="text-brand-accent" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Email</h4>
                                    <a href="mailto:rcandsonspainting@gmail.com" className="text-brand-ink/80 font-light hover:text-brand-accent transition-colors">
                                        rcandsonspainting@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-brand-ink/10 group-hover:border-brand-accent transition-colors">
                                    <Clock className="text-brand-accent" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Business Hours</h4>
                                    <p className="text-brand-ink/80 font-light">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: CLOSED</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Follow Us</h4>
                            <a href="https://www.facebook.com/RCandSonsPainting/" target="_blank" rel="noreferrer" className="inline-block border border-brand-ink/20 px-6 py-3 text-xs uppercase tracking-widest hover:border-brand-ink hover:bg-brand-ink hover:text-white transition-all">
                                Facebook
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-8 md:p-12 shadow-xl relative"
                    >
                        <h3 className="text-2xl font-playball mb-8">Send a Message</h3>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">First Name *</label>
                                    <input type="text" id="firstName" required className="w-full border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">Last Name *</label>
                                    <input type="text" id="lastName" required className="w-full border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">Email Address *</label>
                                    <input type="email" id="email" required className="w-full border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent" />
                                </div>
                            </div>

                            <div className="space-y-2 pt-2">
                                <label htmlFor="service" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">Service of Interest</label>
                                <select id="service" className="w-full border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent appearance-none rounded-none text-brand-ink/80 font-light">
                                    <option value="">Select a service...</option>
                                    <option value="interior">Interior Painting</option>
                                    <option value="exterior">Exterior Painting</option>
                                    <option value="cabinets">Cabinet Refinishing</option>
                                    <option value="deck">Deck Staining</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2 pt-2">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">Project Details *</label>
                                <textarea id="message" required rows={4} className="w-full border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent resize-none"></textarea>
                            </div>

                            <div className="pt-6">
                                <button type="submit" className="w-full bg-brand-ink text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors">
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
