import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-12 max-w-md">
              BRINGING TIMELESS AESTHETICS AND COMFORT TO YOUR HOME.
            </h2>
            <div className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xl">↗</button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-semibold">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Interior Painting</a></li>
              <li><a href="#" className="hover:underline">Exterior Finishing</a></li>
              <li><a href="#" className="hover:underline">Cabinet Refinishing</a></li>
              <li><a href="#" className="hover:underline">Color Consulting</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-semibold">Studio</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Process</a></li>
              <li><a href="#" className="hover:underline">People</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-semibold">Social</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-12">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-massive font-medium text-center select-none"
          >
            LUMINA
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-[10px] uppercase tracking-widest text-black/40 gap-4">
            <div>All Rights Reserved</div>
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
