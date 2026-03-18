import { motion } from "motion/react";
import Star from "lucide-react/dist/esm/icons/star";

const REVIEWS = [
    {
        author: "Courtney Rollo Turner",
        text: "I cannot recommend RC & Sons enough. Our house had 16 years of love and destruction from 2 kids and 2 dogs. The amount of prep work that went into refreshing our home and bringing it back to life was unbelievable and they were so thorough. It looks brand new! The team was such a pleasure to work with, reliable, fast, and reasonable. We are beyond thrilled! Can't wait for the next project!!!"
    },
    {
        author: "Trevin Price",
        text: "Terri was a pleasure to work with and her sons were great and very respectful. I would definitely hire them for future projects."
    },
    {
        author: "Allison Rainier",
        text: "Great work! Even offered a payment plan so we could do everything we wanted done! Thank you!"
    },
    {
        author: "Anthony DiFrancesco",
        text: "I had their painters over this week and they did a wonderful job. I highly recommend them!"
    },
    {
        author: "Marisa Rizzo Muller",
        text: "Did a great job getting rid of popcorn ceiling and painting."
    },
    {
        author: "Eve Melhado",
        text: "They did such a great job painting the exterior of our house!!! Highly recommend!"
    },
    {
        author: "Bob Snyder",
        text: "RC & Sons did an excellent job on the interior and exterior of our house. If you need any painting done, this is the one."
    }
];

export default function Reviews() {
    return (
        <section className="py-32 bg-brand-light text-brand-ink overflow-hidden border-t border-brand-ink/10">
            <div className="px-6 md:px-12 max-w-[1800px] mx-auto mb-16">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <h2 className="text-display uppercase mb-4">Client Testimonials</h2>
                        <div className="flex items-center gap-2 text-brand-accent">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                            ))}
                            <span className="text-xs tracking-widest uppercase font-bold text-brand-ink ml-2">Trusted by Homeowners</span>
                        </div>
                    </div>
                    <p className="text-sm md:text-base max-w-xl text-black/60 leading-relaxed font-light">
                        Don't just take our word for it. Hear from the families and businesses who have trusted us to transform their spaces with careful preparation, premium materials, and flawless execution.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden flex pt-8 pb-12 cursor-grab active:cursor-grabbing">
                <motion.div
                    className="flex gap-8 px-6 md:px-12"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40
                    }}
                >
                    {/* We duplicate the array to create a seamless infinite scroll effect */}
                    {[...REVIEWS, ...REVIEWS].map((review, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 md:p-10 min-w-[320px] md:min-w-[450px] border border-brand-ink/5 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex text-brand-accent mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>
                                <p className="text-sm md:text-base font-light italic leading-relaxed text-brand-ink/80 mb-8">
                                    "{review.text}"
                                </p>
                            </div>
                            <div className="text-[11px] uppercase tracking-[0.2em] font-bold">
                                — {review.author}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
