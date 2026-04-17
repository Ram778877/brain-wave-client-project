import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45_100%_60%/0.04)_0%,_transparent_70%)]" />

      <div className="relative container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-[#2E6DB4] mb-12"
        >
          Creative Marketing Agency
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="font-heading text-[clamp(3rem,12vw,10rem)] font-extrabold leading-[0.85] tracking-tighter text-[#FFFFFF]"
          >
            We're Allergic
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="font-heading text-[clamp(3rem,12vw,10rem)] font-extrabold leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:2px_#1B3A6B]"
          >
            to Average
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="font-heading text-[clamp(3rem,12vw,10rem)] font-extrabold leading-[0.85] tracking-tighter text-[#2E6DB4]"
          >
            Content.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-base text-[#E0E0E0] max-w-xl mx-auto mt-16 space-y-4 text-left"
        >
          <span className="block">If your content looks like everyone else's, it's costing you attention, trust, and business. We fix that.</span>
          <span className="block">Most brands are invisible online. Not because they're bad, but because they sound like everyone else.</span>
          <span className="block">Your audience scrolls past boring. We build content that makes them stop.</span>
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="inline-block mt-10 font-body text-xs tracking-[0.2em] uppercase text-[#2E6DB4] border-b border-[#2E6DB4] pb-1 hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors"
        >
          Book a Free Consultation →
        </motion.a>
      </div>

    </section>
  );
};

export default HeroSection;
