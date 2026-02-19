const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      {/* Trust badges */}
      <div className="border-t border-hero-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-wrap justify-center gap-6">
          {["⭐ Clutch Top Company", "🏆 GoodFirms Rated", "🔒 100% Source Code Ownership"].map((b) => (
            <span key={b} className="text-xs text-hero-muted font-medium bg-hero-foreground/5 px-4 py-2 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <span className="text-xl font-bold font-heading">APPSCRIP</span>
          <p className="text-hero-muted text-sm mt-3 leading-relaxed">
            Pre-built software, customized for your business.
          </p>
          <div className="flex gap-3 mt-4">
            {["LinkedIn", "Twitter", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-hero-muted text-xs hover:text-accent transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold font-heading text-sm mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            {["TMS", "Truck Booking", "Load Board", "Delivery", "Super App"].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold font-heading text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            {["About", "Careers", "Testimonials", "Case Studies", "Blog"].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold font-heading text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-hero-muted">
            <li>🇺🇸 +1-209-207-3634</li>
            <li>🇮🇳 +91-99020-19342</li>
            <li>✉️ hello@appscrip.com</li>
            <li>💬 WhatsApp</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hero-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-hero-muted">
          <span>© 2026 Appscrip. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
