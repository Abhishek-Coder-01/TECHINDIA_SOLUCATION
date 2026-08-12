import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  ExternalLink,
  Github,
  GraduationCap,
  Store,
  BrainCircuit,
  Globe,
  Wrench,
  FolderGit2,
  Code2,
  Target,
  Smartphone,
  Headphones,
  ShieldCheck,
  BookOpenCheck,
  Clock,
  Layers,
  Award,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";

import {
  COMPANY_INFO,
  QUICK_STATS,
  WHAT_WE_DO,
  SERVICES,
  FEATURED_PROJECTS,
  WHY_CHOOSE_US,
  HOW_IT_WORKS,
  TEAM_MEMBERS,
  CERTIFICATES,
  CLIENT_REVIEWS,
  FAQ_LIST,
  ProjectItem,
  CertificateItem,
} from "@/data/contentData";

import projectSmartCampus from "@/assets/project-smart-campus.png";
import projectShopBilling from "@/assets/project-shop-billing.png";
import projectAiCrop from "@/assets/project-ai-crop.png";
import projectEcomStore from "@/assets/project-ecom-store.png";

// Lucide Icon Resolver
const ICON_MAP: Record<string, any> = {
  GraduationCap,
  FolderGit2,
  Globe,
  Store,
  BrainCircuit,
  Code2,
  Wrench,
  Target,
  Smartphone,
  Headphones,
  ShieldCheck,
  BookOpenCheck,
  Clock,
};

// Rotating words for hero section
const ROTATING_WORDS = ["Students.", "Shop Owners.", "Businesses.", "Individuals."];

const CONFETTI_COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6BCB", "#FF9F43"];
const CONFETTI_SHAPES = ["circle", "square", "triangle", "line"] as const;

const cornerSeeds = [
  [
    { x: -40, y: -20, shape: 0, color: 0, rot: 12, baseSize: 12 },
    { x: 220, y: -30, shape: 1, color: 1, rot: 45, baseSize: 8 },
    { x: -25, y: 200, shape: 2, color: 2, rot: -20, baseSize: 14 },
    { x: 240, y: 50, shape: 0, color: 3, rot: 0, baseSize: 5 },
    { x: -30, y: 100, shape: 3, color: 4, rot: 30, baseSize: 10 },
  ],
  [
    { x: 230, y: -20, shape: 1, color: 1, rot: 22, baseSize: 7 },
    { x: -35, y: 40, shape: 2, color: 3, rot: 15, baseSize: 12 },
    { x: 40, y: -30, shape: 0, color: 0, rot: 0, baseSize: 10 },
    { x: 220, y: 190, shape: 3, color: 2, rot: -40, baseSize: 10 },
  ],
  [
    { x: 230, y: -25, shape: 0, color: 4, rot: 0, baseSize: 10 },
    { x: -35, y: 70, shape: 1, color: 1, rot: 35, baseSize: 7 },
    { x: 40, y: -30, shape: 2, color: 2, rot: 40, baseSize: 13 },
  ],
  [
    { x: -40, y: 30, shape: 1, color: 3, rot: 18, baseSize: 8 },
    { x: 230, y: -25, shape: 2, color: 1, rot: -30, baseSize: 14 },
    { x: 50, y: 200, shape: 0, color: 4, rot: 0, baseSize: 8 },
  ],
];

function ConfettiLayer() {
  const corners = [
    { side: "left" as const, vSide: "top" as const, originX: 105, originY: 95 },
    { side: "left" as const, vSide: "bottom" as const, originX: 95, originY: -95 },
    { side: "right" as const, vSide: "top" as const, originX: -105, originY: 95 },
    { side: "right" as const, vSide: "bottom" as const, originX: -105, originY: -95 },
  ];

  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {corners.map((corner, ci) =>
        cornerSeeds[ci].map((seed, si) => {
          const s = seed.baseSize * 2.2;
          const finalX = seed.x * 0.95;
          const finalY = seed.y * 0.95;
          const color = CONFETTI_COLORS[seed.color % CONFETTI_COLORS.length];
          const shape = CONFETTI_SHAPES[seed.shape % CONFETTI_SHAPES.length];

          const sharedMotion = {
            initial: {
              [corner.side]: corner.originX,
              [corner.vSide]: Math.abs(corner.originY),
              opacity: 0,
              scale: 0,
            },
            animate: {
              [corner.side]: finalX,
              [corner.vSide]: finalY < 0 ? Math.abs(finalY) : finalY,
              opacity: 0.75,
              scale: 1,
              rotate: seed.rot,
            },
            transition: {
              delay: 0.5 + si * 0.05 + ci * 0.04,
              duration: 0.5,
              type: "spring" as const,
              stiffness: 200,
              damping: 15,
            },
          };

          const posStyle: React.CSSProperties = { position: "absolute" };

          if (shape === "circle") {
            return <motion.div key={`${ci}-${si}`} {...sharedMotion} style={{ ...posStyle, width: s, height: s, borderRadius: "50%", backgroundColor: color }} />;
          }
          if (shape === "square") {
            return <motion.div key={`${ci}-${si}`} {...sharedMotion} style={{ ...posStyle, width: s, height: s, borderRadius: 2, backgroundColor: color }} />;
          }
          if (shape === "line") {
            return <motion.div key={`${ci}-${si}`} {...sharedMotion} style={{ ...posStyle, width: s, height: s * 0.25, borderRadius: 99, backgroundColor: color }} />;
          }
          const half = s / 2;
          return (
            <motion.div
              key={`${ci}-${si}`}
              {...sharedMotion}
              style={{
                ...posStyle,
                width: 0,
                height: 0,
                borderLeft: `${half}px solid transparent`,
                borderRight: `${half}px solid transparent`,
                borderBottom: `${s * 0.85}px solid ${color}`,
                backgroundColor: "transparent",
              }}
            />
          );
        })
      )}
    </div>
  );
}

interface LandingProps {
  onRequestQuote: (defaultService?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectCertificate: (cert: CertificateItem) => void;
}

export default function Landing({ onRequestQuote, onSelectProject, onSelectCertificate }: LandingProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-[72px]">
      {/* SECTION B: HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[540px] lg:min-h-[580px] flex items-center justify-center">
            {/* Confetti particles */}
            <ConfettiLayer />

            {/* Top-left Tilted Hero Card */}
            <motion.div
              className="hidden md:block absolute left-[-80px] lg:left-[-20px] top-[10px] w-[210px] lg:w-[260px] z-10"
              initial={{ opacity: 0, scale: 0.4, x: -80, y: -40 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card rotate-[6deg] hover:rotate-0 transition-transform duration-300">
                <img src={projectSmartCampus} alt="Final year project preview" className="w-full h-[130px] lg:h-[150px] object-cover" />
                <div className="p-3 bg-card flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Final Year Projects
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground">MERN Stack</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom-left Tilted Hero Card */}
            <motion.div
              className="hidden md:block absolute left-[-100px] lg:left-[-40px] bottom-[10px] w-[210px] lg:w-[260px] z-10"
              initial={{ opacity: 0, scale: 0.4, x: -80, y: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.35 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
                <img src={projectShopBilling} alt="Shop billing website preview" className="w-full h-[130px] lg:h-[150px] object-cover" />
                <div className="p-3 bg-card flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    Shop Websites
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground">WhatsApp Billing</span>
                </div>
              </div>
            </motion.div>

            {/* Top-right Tilted Hero Card */}
            <motion.div
              className="hidden md:block absolute right-[-80px] lg:right-[-20px] top-[10px] w-[210px] lg:w-[260px] z-10"
              initial={{ opacity: 0, scale: 0.4, x: 80, y: -40 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.25 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                <img src={projectAiCrop} alt="AI ML project preview" className="w-full h-[130px] lg:h-[150px] object-cover" />
                <div className="p-3 bg-card flex items-center justify-between">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-500/10 px-2.5 py-1 rounded-full">
                    AI / ML Solutions
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground">Python & Vision</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom-right Tilted Hero Card */}
            <motion.div
              className="hidden md:block absolute right-[-100px] lg:right-[-40px] bottom-[10px] w-[210px] lg:w-[260px] z-10"
              initial={{ opacity: 0, scale: 0.4, x: 80, y: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                <img src={projectEcomStore} alt="Business website preview" className="w-full h-[130px] lg:h-[150px] object-cover" />
                <div className="p-3 bg-card flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-500/10 px-2.5 py-1 rounded-full">
                    Website Development
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground">Responsive UI</span>
                </div>
              </div>
            </motion.div>

            {/* Center Hero Messaging */}
            <motion.div
              className="text-center max-w-3xl mx-auto relative z-20 px-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" /> Genuine Founder-Led Technology Team
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-display tracking-tight leading-[1.15] text-foreground mb-6 font-bold">
                Building Digital Solutions for{" "}
                <span className="inline-block relative min-w-[7ch]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_WORDS[wordIndex]}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35 }}
                      className="text-primary underline decoration-primary/40 underline-offset-4 inline-block"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                {COMPANY_INFO.subtext}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base font-semibold px-8 h-12 gap-2 shadow-md"
                  onClick={() => onRequestQuote()}
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base font-semibold px-8 h-12 gap-2"
                  onClick={() => navigate("/services")}
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION C: TRUST / QUICK STATS */}
      <section className="py-10 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {QUICK_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center p-4 rounded-2xl bg-muted/40 border border-border/50"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  {stat.suffix}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: WHAT WE DO */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1">
                What We Do
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
                {WHAT_WE_DO.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {WHAT_WE_DO.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {WHAT_WE_DO.highlights.map((hl) => (
                  <div key={hl} className="flex items-center gap-2.5 p-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <Card className="p-5 rounded-2xl border-border bg-card shadow-sm hover:border-primary/40 transition-colors">
                  <GraduationCap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-display font-bold text-base text-foreground mb-1">For Students</h3>
                  <p className="text-xs text-muted-foreground">Final Year & Semester project code, guidance & viva prep.</p>
                </Card>
                <Card className="p-5 rounded-2xl border-border bg-card shadow-sm hover:border-primary/40 transition-colors">
                  <Store className="w-8 h-8 text-emerald-500 mb-3" />
                  <h3 className="font-display font-bold text-base text-foreground mb-1">For Shop Owners</h3>
                  <p className="text-xs text-muted-foreground">Digital showcase, product lists & direct WhatsApp ordering.</p>
                </Card>
              </div>
              <div className="space-y-4 pt-6">
                <Card className="p-5 rounded-2xl border-border bg-card shadow-sm hover:border-primary/40 transition-colors">
                  <Building2 className="w-8 h-8 text-blue-500 mb-3" />
                  <h3 className="font-display font-bold text-base text-foreground mb-1">For Businesses</h3>
                  <p className="text-xs text-muted-foreground">Modern, fast, SEO-friendly custom websites & web portals.</p>
                </Card>
                <Card className="p-5 rounded-2xl border-border bg-card shadow-sm hover:border-primary/40 transition-colors">
                  <BrainCircuit className="w-8 h-8 text-purple-500 mb-3" />
                  <h3 className="font-display font-bold text-base text-foreground mb-1">AI & Support</h3>
                  <p className="text-xs text-muted-foreground">Machine learning models, bug fixing & technical support.</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION E: SERVICES PREVIEW */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
              Our Core Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Tailored Technical Services for Every Need
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              From academic project development to production business websites and AI integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv, i) => {
              const IconComp = ICON_MAP[srv.iconName] || Globe;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className="h-full border-border bg-background hover:border-primary/50 transition-all hover:shadow-md rounded-2xl flex flex-col justify-between p-6">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{srv.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">{srv.shortDesc}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {srv.technologies.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-xs font-semibold text-primary hover:text-primary hover:bg-primary/10 mt-2"
                      onClick={() => onRequestQuote(srv.title)}
                    >
                      <span>Request Service</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="font-semibold text-sm gap-2" asChild>
              <Link to="/services">
                View All Detailed Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION F: FEATURED PROJECTS */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
                Real Work Proof
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
                Featured Completed Projects
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Explore real web apps, college projects, and shop systems built by our team.
              </p>
            </div>

            <Button variant="outline" className="font-semibold text-xs gap-1.5 self-start sm:self-auto" asChild>
              <Link to="/projects">
                View All Projects ({FEATURED_PROJECTS.length}) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border bg-card overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                  <div>
                    <div
                      className="relative h-[200px] sm:h-[230px] overflow-hidden bg-muted cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-card/90 backdrop-blur-md text-foreground border-border text-xs font-semibold">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technology.map((tech) => (
                          <span key={tech} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3
                        className="font-display font-bold text-xl text-foreground hover:text-primary transition-colors cursor-pointer"
                        onClick={() => onSelectProject(project)}
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {project.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs font-semibold gap-1.5"
                      onClick={() => onSelectProject(project)}
                    >
                      View Case Study
                    </Button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          title="GitHub Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: WHY CHOOSE US */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
              Why TechIndia
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Why Choose TECHINDIA SOLUTIONS?
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Transparent communication, clean practical code, and full post-delivery support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, i) => {
              const IconComp = ICON_MAP[item.icon] || ShieldCheck;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-background border border-border space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION H: HOW IT WORKS */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
              Simple 6-Step Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              How We Work With You
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              From requirement submission to live deployment and technical guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((hw, i) => (
              <motion.div
                key={hw.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative p-6 rounded-2xl bg-card border border-border space-y-3"
              >
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-extrabold text-sm flex items-center justify-center">
                  0{hw.step}
                </div>
                <h3 className="font-display font-bold text-base text-foreground">{hw.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{hw.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION I: TEAM PREVIEW */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
                Transparent 2-Person Team
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
                Meet Our Tech Leads
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Direct developer contact. No sales reps, no middlemen.
              </p>
            </div>

            <Button variant="outline" className="font-semibold text-xs gap-1.5 self-start sm:self-auto" asChild>
              <Link to="/team">
                Meet Full Team <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full border-border bg-background p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-primary/20 shadow-sm flex-shrink-0"
                  />
                  <div className="space-y-2 text-center sm:text-left">
                    {member.isFounder && (
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] font-semibold">
                        Founder / Admin
                      </Badge>
                    )}
                    <h3 className="font-display font-bold text-lg text-foreground">{member.name}</h3>
                    <p className="text-xs font-semibold text-primary">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-1 pt-1 justify-center sm:justify-start">
                      {member.skills.slice(0, 3).map((sk) => (
                        <span key={sk} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION J: CERTIFICATES PREVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
                Verified Credentials
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
                Genuine Certificates & Credentials
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Official quality management & software engineering certifications.
              </p>
            </div>

            <Button variant="outline" className="font-semibold text-xs gap-1.5 self-start sm:self-auto" asChild>
              <Link to="/certificates">
                View All Certificates <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CERTIFICATES.map((cert) => (
              <Card
                key={cert.id}
                className="p-5 border-border bg-card rounded-2xl cursor-pointer hover:border-primary/40 transition-colors flex items-center gap-4"
                onClick={() => onSelectCertificate(cert)}
              >
                <div className="w-20 h-20 rounded-xl bg-muted overflow-hidden flex-shrink-0 border border-border">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-sm text-foreground hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer} ({cert.year})</p>
                  <p className="text-[11px] text-primary font-semibold flex items-center gap-1 pt-1">
                    <Award className="w-3.5 h-3.5" /> Click to view details
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION K: CLIENT REVIEWS */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
              Genuine Feedback
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              What Students & Business Clients Say
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Authentic reviews from individuals and shop owners who worked with TECHINDIA SOLUTIONS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_REVIEWS.map((rev, i) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full p-6 border-border bg-background rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-amber-500">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] text-muted-foreground font-medium">{rev.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground leading-relaxed italic">
                      "{rev.reviewText}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">{rev.clientName}</p>
                      <p className="text-xs text-muted-foreground">{rev.clientType}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px]">
                      {rev.serviceUsed}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="font-semibold text-xs gap-2"
              asChild
            >
              <a href={COMPANY_INFO.googleFormUrl} target="_blank" rel="noopener noreferrer">
                Share Your Experience (Google Form) <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3">
              Got Questions?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Find answers to common questions about our services, quotations, and process.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQ_LIST.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-xl px-4 bg-card"
              >
                <AccordionTrigger className="font-display font-bold text-sm text-foreground hover:no-underline text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION L: FINAL CTA */}
      <section className="py-16 lg:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground rounded-[2rem] relative overflow-hidden px-6 pt-16 pb-16 lg:px-12 lg:pt-20 lg:pb-20 text-center text-background shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 relative z-10"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                Have a Project or Website Requirement?
              </h2>

              <p className="text-background/80 text-base max-w-lg mx-auto leading-relaxed">
                Tell us what you need and our founder-led team will get in touch with a clear plan and quote.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base font-semibold px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-lg"
                  onClick={() => onRequestQuote()}
                >
                  Request a Project <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base font-semibold px-8 h-12 border-emerald-400 text-emerald-400 hover:bg-emerald-950/60 gap-2"
                  asChild
                >
                  <a href={COMPANY_INFO.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
