import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Marketing", href: "/marketing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-1 px-6">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Brainwave Creative Logo" className="h-10 md:h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs tracking-[0.15em] uppercase text-[#1B3A6B] hover:text-[#2E6DB4] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block font-body text-xs tracking-[0.15em] uppercase text-[#1B3A6B] hover:text-[#2E6DB4] transition-colors font-medium"
        >
          Let's Talk →
        </a>

        <button
          className="md:hidden text-[#1B3A6B]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-foreground"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-4xl font-extrabold text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
