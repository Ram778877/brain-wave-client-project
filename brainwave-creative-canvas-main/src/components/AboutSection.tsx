import { motion } from "framer-motion";

const team = [
  {
    name: "Rahul",
    role: "Co-Founder & Business Operations Head",
    description:
      "Drives business strategy and client relationships with a focus on sustainable growth.",
    initial: "R",
    image: "/Rahul-updated.jpg"
  },
  {
    name: "Eutica",
    role: "Co-Founder & Creative Head",
    description:
      "Leads creative direction and campaign conceptualization for impactful brand stories.",
    initial: "E",
    image: "/Eutica-updated.jpg"
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#2E6DB4] mb-6">
            Who We Are
          </p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-extrabold tracking-tight text-[#FFFFFF] leading-[0.95] mb-8">
            Next time you wonder<br />who to trust,
          </h2>
          <p className="font-body text-[#E0E0E0] leading-relaxed text-lg">
            Brainwave Creative is a full-service marketing agency that specializes
            in making brands impossible to ignore. We blend strategy with
            creativity to deliver results that speak for themselves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="border border-border rounded-2xl p-10 md:p-14 group hover:border-accent/30 transition-colors"
            >
              <div
                className="w-[100px] h-[100px] border border-[#2E6DB4] overflow-hidden mb-8"
                style={{ borderRadius: '50%' }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-1">
                {member.name}
              </h3>
              <p className="font-body text-sm text-[#2E6DB4] font-semibold mb-5">
                {member.role}
              </p>
              <p className="font-body text-sm text-[#E0E0E0] leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
