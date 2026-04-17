import { motion } from "framer-motion";

const caseStudies = [
  {
    client: "Cremeux",
    category: "Food & Beverage",
    title: "From 0 to Viral in One Post",
    description:
      "Crafted a scroll-stopping social media campaign for Cremeux that exploded organically, turning a local dessert brand into a city-wide sensation.",
    stats: { likes: "5,200+", reach: "50K+", growth: "300%" },
    image: "/RAH02133.jpg.jpeg"
  },
  {
    client: "OG Fitness",
    category: "Health & Fitness",
    title: "Building a Fitness Community Online",
    description:
      "Developed a comprehensive content strategy including reels, stories, and engagement campaigns that built a dedicated fitness community from scratch.",
    stats: { likes: "10K+", reach: "100K+", growth: "450%" },
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    client: "Urban Eats",
    category: "Restaurant",
    title: "Redefining Restaurant Marketing",
    description:
      "Rebranded and launched a complete social media presence with stunning food photography, menu design, and viral-worthy content strategy.",
    stats: { likes: "8K+", reach: "75K+", growth: "200%" },
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="work" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-heading text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-tight text-[#FFFFFF]">
            We let the work
          </h2>
          <h2 className="font-heading text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-tight text-transparent [-webkit-text-stroke:2px_#1B3A6B]">
            do the talking.
          </h2>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-center"
            >
              {/* Case Study Image */}
              <div className={`aspect-[4/3] bg-secondary rounded-2xl flex items-center justify-center overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={study.image}
                  alt={`${study.client} case study`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className={`flex flex-col items-center text-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#2E6DB4]">
                  {study.category}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mt-3 mb-2">
                  {study.client}
                </h3>
                <p className="font-heading text-lg text-[#2E6DB4] font-semibold mb-5">
                  {study.title}
                </p>
                <p className="font-body text-sm text-[#E0E0E0] leading-relaxed mb-8 max-w-md">
                  {study.description}
                </p>

                <div className="flex justify-center gap-10">
                  {Object.entries(study.stats).map(([key, val]) => (
                    <div key={key}>
                      <p className="font-heading text-3xl font-extrabold text-[#FFFFFF]">
                        {val}
                      </p>
                      <p className="font-body text-xs text-[#E0E0E0] capitalize mt-1">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
