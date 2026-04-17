import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#2E6DB4] mb-6">
              Get In Touch
            </p>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-extrabold tracking-tight text-[#FFFFFF] leading-[0.95] mb-8">
              Let's work<br />together.
            </h2>
            <p className="font-body text-[#E0E0E0] leading-relaxed mb-12">
              Ready to make your brand impossible to ignore? Drop us a message
              and let's talk about how we can grow your presence.
            </p>

            <div className="space-y-5">
              <a
                href="https://www.instagram.com/brainwave_creative/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 font-body text-sm text-[#E0E0E0] hover:text-[#2E6DB4] transition-colors"
              >
                <Instagram size={18} /> @brainwave_creative
              </a>
              <a
                href="mailto:hello@brainwavecreative.com"
                className="flex items-center gap-4 font-body text-sm text-[#E0E0E0] hover:text-[#2E6DB4] transition-colors"
              >
                <Mail size={18} /> hello@brainwavecreative.com
              </a>
              <span className="flex items-center gap-4 font-body text-sm text-[#E0E0E0]">
                <Phone size={18} /> Available for consultations
              </span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="space-y-8"
          >
            {[
              { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
              { label: "Email", type: "email", key: "email" as const, placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-[#E0E0E0] mb-3 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-[#FFFFFF] focus:border-[#2E6DB4] outline-none transition-colors placeholder:text-[#E0E0E0]/50"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-[#E0E0E0] mb-3 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-[#FFFFFF] focus:border-[#2E6DB4] outline-none transition-colors resize-none placeholder:text-[#E0E0E0]/50"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="font-body text-xs tracking-[0.2em] uppercase text-[#FFFFFF] border border-[#2E6DB4] px-8 py-4 rounded-full bg-[#2E6DB4] hover:bg-[#1B3A6B] hover:border-[#1B3A6B] transition-colors"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
