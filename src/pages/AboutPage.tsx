import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, WHAT_WE_DO, WHO_WE_SERVE } from "@/data/contentData";
import {
  GraduationCap,
  Store,
  Building2,
  Rocket,
  User,
  School,
  Target,
  Eye,
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  GraduationCap,
  School,
  Store,
  Building2,
  Rocket,
  User,
};

interface AboutPageProps {
  onRequestQuote: () => void;
}

export default function AboutPage({ onRequestQuote }: AboutPageProps) {
  const navigate = useNavigate();

  const approachSteps = [
    {
      step: "01",
      title: "Understand",
      desc: "We listen to your specific requirements, academic syllabus or business goals.",
    },
    {
      step: "02",
      title: "Plan",
      desc: "We map out clear system architecture, database design, and milestone timelines.",
    },
    {
      step: "03",
      title: "Build",
      desc: "We develop your software or website using clean, modern, readable code.",
    },
    {
      step: "04",
      title: "Test",
      desc: "Thorough testing across mobile screens, browsers, and error edge cases.",
    },
    {
      step: "05",
      title: "Deliver",
      desc: "Full source code handover, deployment to live server, and documentation.",
    },
    {
      step: "06",
      title: "Support",
      desc: "Ongoing post-delivery technical assistance, bug fixes, and viva explanation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-[72px] pb-20">
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-4"
          >
            About TECHINDIA SOLUTIONS
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground tracking-tight mb-6">
            Small Team. Genuine Code. Practical Digital Solutions.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            TECHINDIA SOLUTIONS is a technology-focused team providing project
            development, website development, AI solutions and technical
            support. We work with students, schools, colleges, shop owners,
            businesses and individuals to turn their requirements into
            practical digital solutions.
          </p>
        </div>
      </section>

      {/* Story, Mission & Vision */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>

              <h2 className="font-display font-bold text-xl text-foreground">
                Our Story
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                TECHINDIA SOLUTIONS was started with a simple belief: clients
                and students deserve direct access to actual developers,
                transparent pricing, and practical working code. We noticed
                how many students struggled with complex project viva
                requirements and how local shop owners lacked simple,
                affordable websites. We stepped in to bridge that gap.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>

              <h2 className="font-display font-bold text-xl text-foreground">
                Our Mission
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To deliver clean, bug-free, high-performance web applications
                and academic project guidance that empowers students to excel
                and local businesses to grow online — backed by honest
                communication and full post-delivery support.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border space-y-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>

              <h2 className="font-display font-bold text-xl text-foreground">
                Our Vision
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To become the most trusted digital technology partner for
                students, shop owners, and small enterprises across India —
                recognized for authentic work, technical excellence, and zero
                artificial fluff.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 lg:py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge
              variant="outline"
              className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3"
            >
              Target Audience
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Who We Serve
            </h2>

            <p className="text-muted-foreground text-sm mt-2">
              Tailored digital solutions built specifically for your category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_WE_SERVE.map((ws) => {
              const IconComp = ICON_MAP[ws.icon] || User;

              return (
                <Card
                  key={ws.title}
                  className="p-6 rounded-2xl bg-background border-border space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-base text-foreground">
                    {ws.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ws.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge
              variant="outline"
              className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-3"
            >
              Methodology
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Our 6-Step Development Approach
            </h2>

            <p className="text-muted-foreground text-sm mt-2">
              Understand → Plan → Build → Test → Deliver → Support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((app) => (
              <div
                key={app.step}
                className="p-6 rounded-2xl bg-card border border-border space-y-3"
              >
                <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Step {app.step}
                </span>

                <h3 className="font-display font-bold text-lg text-foreground">
                  {app.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="font-semibold text-sm gap-2"
              onClick={() => navigate("/contact")}
            >
              Start Your Project With Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}