import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { COMPANY_INFO } from "@/data/contentData";

interface NavbarProps {
  onRequestQuote: () => void;
}

export function Navbar({ onRequestQuote }: NavbarProps) {
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar sticky always or on slight scroll
      if (window.scrollY > 20) {
        setNavVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Team", path: "/team" },
    { label: "Certificates", path: "/certificates" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const elementId = path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: navVisible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[72px] px-4 sm:px-6 lg:px-6">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo size="lg" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-semibold gap-1.5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
              asChild
            >
              <a href={COMPANY_INFO.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp Us
              </a>
            </Button>
            <Button
              size="sm"
              className="text-xs font-semibold gap-1.5 shadow-sm"
              onClick={() => navigate("/contact")}
            >
              Request a Project <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                      }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-border flex flex-col gap-2.5">
                <Button
                  className="w-full justify-center font-semibold text-sm gap-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/contact");
                  }}
                >
                  Request a Project <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-center font-semibold text-sm gap-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                  asChild
                >
                  <a href={COMPANY_INFO.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
