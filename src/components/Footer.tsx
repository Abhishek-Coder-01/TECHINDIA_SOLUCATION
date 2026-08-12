import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { COMPANY_INFO } from "@/data/contentData";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

interface FooterProps {
  onRequestQuote: () => void;
}

export function Footer({ onRequestQuote }: FooterProps) {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects / Portfolio", path: "/projects" },
    { label: "Our Team", path: "/team" },
    { label: "Certificates", path: "/certificates" },
    { label: "Client Reviews", path: "/reviews" },
    { label: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    "Final Year Projects",
    "Mini & Major Projects",
    "Website Development",
    "Shop / Business Websites",
    "AI / ML Solutions",
    "Python / Java / MERN",
    "Bug Fixing & Support",
  ];

  return (
    <footer className="bg-card border-t border-border pt-16 pb-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Logo size="lg" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {COMPANY_INFO.subtext}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {COMPANY_INFO.tagline}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wide text-foreground uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wide text-foreground uppercase">
              Main Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {serviceLinks.map((srv) => (
                <li key={srv}>
                  <Link
                    to="/services"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {srv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wide text-foreground uppercase">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs font-medium">
              <a
                href={COMPANY_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                <div>
                  <div className="font-bold text-[11px] uppercase">WhatsApp Us</div>
                  <div className="text-xs">{COMPANY_INFO.phone}</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 TECHINDIA SOLUTIONS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={onRequestQuote} className="hover:text-foreground underline transition-colors">
              Submit Requirement
            </button>
            <span>•</span>
            <a href={COMPANY_INFO.googleFormUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline transition-colors">
              Google Form
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
