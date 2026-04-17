import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Decode",
    description: "We approach briefs with curiosity, reading between the lines to grasp every need and uncover what makes your brand unique.",
  },
  {
    number: "02",
    title: "Create",
    description: "Our multidisciplinary team refines ideas with care and expertise, crafting content that resonates and converts.",
  },
  {
    number: "03",
    title: "Achieve",
    description: "We close the loop with precise, timely, and quality outputs — delivering results that speak for themselves.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-heading text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-tight text-[#FFFFFF]">
            Thinking isn't linear.
          </h2>
          <h2 className="font-heading text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-tight text-transparent [-webkit-text-stroke:2px_#1B3A6B]">
            Our method is.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className={`p-10 md:p-14 flex flex-col flex-1 items-center text-center ${i < 2 ? "md:border-r border-border" : ""} ${i > 0 ? "border-t md:border-t-0 border-border" : ""}`}
            >
              <span className="font-body text-xs text-[#2E6DB4] tracking-widest">{step.number}</span>
              <h3 className="font-heading text-4xl font-extrabold text-[#FFFFFF] mt-4 mb-6">
                {step.title}
              </h3>
              <p className="font-body text-sm text-[#E0E0E0] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
