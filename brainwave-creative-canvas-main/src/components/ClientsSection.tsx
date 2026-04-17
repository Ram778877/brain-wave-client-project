import { motion } from "framer-motion";

const clients = [
  { name: "Alegra Internet", category: "Technology", initial: "AI", logo: "/Alegra Internet.png" },
  { name: "Andrade's Dental Care", category: "Healthcare", initial: "AD", logo: "/Andrade's Dental Clinic.png" },
  { name: "Beyond", category: "Business", initial: "BV", logo: "/Beyond Ventures.png" },
  { name: "Bishram Constructions", category: "Real Estate", initial: "BC", logo: "/Bishram Constructions.png" },
  { name: "Cafe Tato", category: "Food & Beverage", initial: "CT", logo: "/Cafe Tato.png" },
  { name: "City Diagnostic Lab", category: "Healthcare", initial: "CDL", logo: "/City Diagnostic Lab.png" },
  { name: "FiiRE Workspace", category: "Workspace", initial: "FW", logo: "/FiiRE workspace.png" },
  { name: "Furnishing Depot", category: "Retail", initial: "FD", logo: "/Furnishing Depot.png" },
  { name: "Gaalmo by Tato", category: "Food & Beverage", initial: "GT", logo: "/Gaalmo by Tato.png" },
  { name: "Grihum", category: "Real Estate", initial: "GR", logo: "/Grihum.png" },
  { name: "Jetstraw", category: "Technology", initial: "JS", logo: "/Jetstraw.png" },
  { name: "Kaizen", category: "Consulting", initial: "KZ", logo: "/Kaizen.png" },
  { name: "Medallion", category: "Real Estate", initial: "MD", logo: "/Medallion.png" },
  { name: "Mirashya Homes", category: "Real Estate", initial: "MH", logo: "/Mirashya Homes.png" },
  { name: "Shree Ganesh", category: "Business", initial: "SG", logo: "/Shree Ganesh.png" },
  { name: "The Regalia Resort", category: "Hospitality", initial: "RR", logo: "/The Regalia Resort.png" },
  { name: "Tinera Stays", category: "Hospitality", initial: "TS", logo: "/Tinera Stays.png" },
  { name: "Toffee Doodle", category: "F&B / Goa", initial: "TD", logo: "/Toffee Doodle.png" },
  { name: "Tolani Developers", category: "Real Estate", initial: "TD", logo: "/Tolani Developers.png" },
  { name: "VIDA", category: "Real Estate", initial: "VD", logo: "/VIDA.png" },
  { name: "Yatrik", category: "Travel", initial: "YK", logo: "/Yatrik.png" },
];

// Duplicate for seamless infinite loop
const marqueeClients = [...clients, ...clients];

const ClientCard = ({ client }: { client: typeof clients[0] }) => (
  <div className="flex-shrink-0 mx-6 flex items-center gap-4 px-8 py-5 rounded-2xl border border-border/80 bg-[#0a0a0a] hover:bg-[#111827] hover:border-[#2E6DB4]/50 hover:shadow-[0_0_15px_rgba(46,109,180,0.15)] transition-all duration-300 group min-w-[220px]">
    <div className="w-12 h-12 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:bg-[#2E6DB4]/20 ring-1 ring-white/5 group-hover:ring-[#2E6DB4]/50 transition-all duration-300 flex-shrink-0 overflow-hidden">
      {"logo" in client && client.logo ? (
        <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity" />
      ) : (
        <span className="font-heading text-xs font-extrabold text-[#2E6DB4] tracking-tight">
          {client.initial}
        </span>
      )}
    </div>
    <div>
      <p className="font-heading text-sm font-bold text-[#FFFFFF] group-hover:text-[#60a5fa] transition-colors leading-tight">
        {client.name}
      </p>
      <p className="font-body text-xs text-[#A0A0A0] group-hover:text-[#E0E0E0] transition-colors mt-0.5">
        {client.category}
      </p>
    </div>
  </div>
);

const ClientsSection = () => {
  return (
    <section className="py-28 border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="font-body text-xs tracking-[0.2em] uppercase text-[#2E6DB4] mb-4 block">
              Trusted By
            </span>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-[#FFFFFF]">
              Brands we've
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#1B3A6B]">grown together.</span>
            </h2>
          </div>
          <p className="font-body text-sm text-[#E0E0E0] max-w-md leading-relaxed">
            From Goa's hidden gems to brands in Jharkhand and Bangalore — 30+ businesses trusted us to level up their digital presence.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative">
        <div
          className="flex animate-marquee"
          style={{ width: "max-content" }}
        >
          {marqueeClients.map((client, i) => (
            <ClientCard key={`row1-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left */}
      <div className="relative mt-5">
        <div
          className="flex animate-marquee-reverse"
          style={{ width: "max-content" }}
        >
          {[...marqueeClients].reverse().map((client, i) => (
            <ClientCard key={`row2-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
};

export default ClientsSection;
