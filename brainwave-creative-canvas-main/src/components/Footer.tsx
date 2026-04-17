const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="flex items-center">
          <span className="font-heading text-3xl font-bold tracking-tight text-white">Brainwave Creative</span>
        </a>
        <p className="font-body text-xs text-[#E0E0E0]">
          © {new Date().getFullYear()} Brainwave Creative. All rights reserved.
        </p>
        <a
          href="https://www.instagram.com/brainwave_creative/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-[#E0E0E0] hover:text-[#2E6DB4] transition-colors"
        >
          Instagram ↗
        </a>
      </div>
    </footer>
  );
};

export default Footer;
