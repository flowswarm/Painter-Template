import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-12 max-w-md">
              JOIN OUR EMAIL LIST.
            </h2>
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors"
              />
              <button aria-label="Subscribe to newsletter" className="absolute right-0 top-1/2 -translate-y-1/2 text-xl">↗</button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-semibold">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:underline text-brand-accent">About Us</Link></li>
              <li><Link to="/services" className="hover:underline text-brand-accent">All Services</Link></li>
              <li><Link to="/contact" className="hover:underline text-brand-accent">Contact</Link></li>
              <li><a href="#" className="hover:underline">Interior Painting</a></li>
              <li><a href="#" className="hover:underline">Exterior Finishing</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-brand-ink/80">
              <li>603 West Ave</li>
              <li>New Castle, DE 19720</li>
              <li className="pt-2"><a href="tel:3023676455" className="hover:text-brand-accent transition-colors">(302) 367-6455</a></li>
              <li><a href="mailto:rcandsonspainting@gmail.com" className="hover:text-brand-accent transition-colors break-all">rcandsonspainting@gmail.com</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-semibold">Hours</h3>
            <ul className="space-y-1 text-sm text-brand-ink/80">
              <li className="flex justify-between w-full max-w-[280px]"><span>Monday</span><span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between w-full max-w-[280px]"><span>Tuesday</span><span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between w-full max-w-[280px]"><span>Wednesday</span><span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between w-full max-w-[280px]"><span>Thursday</span><span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between w-full max-w-[280px]"><span>Friday</span><span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between w-full max-w-[280px]"><span>Saturday</span><span>9:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between w-full max-w-[280px]"><span>Sunday</span><span>CLOSED</span></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-semibold">Social</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.facebook.com/RCandSonsPainting/" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-ink/10 pt-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center select-none"
          >
            <img src="/images/logo.png" alt="RC & Sons Painting Logo" className="h-24 md:h-32 w-auto object-contain opacity-80" />
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-[10px] uppercase tracking-widest text-black/40 gap-4">
            <div>&copy; {new Date().getFullYear()} RC & Sons Painting. All Rights Reserved. Est. 1992</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-black">Terms of Service</a>
              <a href="#" className="hover:text-black">Privacy & Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
