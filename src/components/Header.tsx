import { motion } from "motion/react";
import { Search, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-8 md:px-12">
      <nav className="flex justify-between items-center max-w-[1800px] mx-auto">
        <div className="text-xl font-medium tracking-tighter">LUMINA PAINTING</div>
        
        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#about" className="hover:opacity-60 transition-opacity">About Us</a>
          <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <Search size={20} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
          <User size={20} strokeWidth={1.5} className="cursor-pointer hover:opacity-60 transition-opacity" />
          <Menu size={20} strokeWidth={1.5} className="md:hidden cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
