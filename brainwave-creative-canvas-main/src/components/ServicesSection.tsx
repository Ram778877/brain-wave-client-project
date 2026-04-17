import { motion } from "framer-motion";
import { Megaphone, Palette, Video, BarChart3, PenTool, Share2 } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    tags: ["Strategy", "Community", "Growth"],
  },
  {
    icon: Video,
    title: "Content Production",
    tags: ["Reels", "Video", "Photography"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    tags: ["Branding", "Visual Identity", "Print"],
  },
  {
    icon: PenTool,
    title: "Brand Strategy",
    tags: ["Positioning", "Voice", "Direction"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    tags: ["Data", "Insights", "Optimization"],
  },
  {
    icon: Share2,
    title: "Influencer Marketing",
    tags: ["Partnerships", "Reach", "Authenticity"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#2E6DB4] mb-6">
            What We Do
          </p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-extrabold tracking-tight text-[#FFFFFF] leading-[0.95]">
            Ideas come in<br />many shapes.
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="border-b border-border py-12 flex flex-col items-center justify-center gap-6 group cursor-default hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <service.icon className="w-8 h-8 text-[#2E6DB4] shrink-0" />
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#FFFFFF] group-hover:text-[#7BA7C7] transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs text-[#E0E0E0] border border-border rounded-full px-4 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
