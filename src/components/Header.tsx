import { motion } from "motion/react";
import User from "lucide-react/dist/esm/icons/user";
import Menu from "lucide-react/dist/esm/icons/menu";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-bg/90 backdrop-blur-sm text-brand-ink px-6 md:px-12 border-b border-brand-ink/10">
      <nav className="flex justify-between items-center max-w-[1800px] mx-auto">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/images/logo.png" alt="RC & Sons Painting Logo" className="h-[96px] w-auto object-contain scale-150 origin-left" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-medium text-brand-ink/80">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <Link to="/about" className="hover:text-brand-accent transition-colors">About</Link>
          <div className="relative group">
            <Link to="/services" className="hover:text-brand-accent transition-colors py-6 flex items-center gap-1">
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </Link>

            <div className="absolute top-full left-0 mt-0 w-64 bg-white/95 backdrop-blur-md shadow-xl border border-brand-ink/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm overflow-hidden flex flex-col pt-2 pb-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="block px-6 py-3 text-[10px] tracking-[0.15em] hover:bg-brand-bg hover:text-brand-accent transition-colors border-b border-brand-ink/5 last:border-none"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:3023676455" className="hidden md:flex items-center justify-center bg-brand-ink text-white px-6 py-3 text-[10px] tracking-widest font-bold uppercase hover:bg-brand-accent transition-colors">
            Call or Text Now
          </a>
          <Link to="/admin/login" aria-label="Admin Login">
            <User size={20} strokeWidth={1.5} className="cursor-pointer hover:text-brand-accent transition-colors" />
          </Link>
          <Menu size={20} strokeWidth={1.5} className="md:hidden cursor-pointer hover:text-brand-accent transition-colors" />
        </div>
      </nav>
    </header>
  );
}
