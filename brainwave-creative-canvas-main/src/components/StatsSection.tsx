import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "20+", label: "Clients" },
  { value: "5M+", label: "Reach" },
  { value: "300%", label: "Avg. Growth" },
];

const StatsSection = () => {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center py-8"
            >
              <p className="font-heading text-5xl md:text-6xl font-extrabold text-[#2E6DB4]">
                {stat.value}
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[#E0E0E0] mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
