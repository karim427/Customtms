import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#" className={`text-xl font-bold font-heading tracking-tight transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
          APPSCRIP
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground/80"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+12092073634"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground/80"}`}
          >
            <Phone className="w-4 h-4" />
            +1-209-207-3634
          </a>
          <a
            href="#book-demo"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all hover:scale-[1.02]"
          >
            Book a Demo
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background shadow-lg border-t">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground text-sm font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+12092073634" className="flex items-center gap-1.5 text-sm font-medium text-foreground py-2">
              <Phone className="w-4 h-4" /> +1-209-207-3634
            </a>
            <a
              href="#book-demo"
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
