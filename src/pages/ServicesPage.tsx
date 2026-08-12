import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES, ServiceItem } from "@/data/contentData";
import {
  GraduationCap,
  FolderGit2,
  Globe,
  Store,
  BrainCircuit,
  Code2,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Users,
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  GraduationCap,
  FolderGit2,
  Globe,
  Store,
  BrainCircuit,
  Code2,
  Wrench,
};

interface ServicesPageProps {
  onRequestQuote: (serviceName?: string) => void;
}

export default function ServicesPage({ onRequestQuote }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-background pt-[72px] pb-20">
      {/* Page Header */}
      <section className="py-16 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-4">
            Services & Solutions
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
            Comprehensive Digital & Technical Services
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Detailed breakdown of our project development, website creation, AI solutions, and technical support services.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((srv, index) => {
            const IconComp = ICON_MAP[srv.iconName] || Globe;
            const isEven = index % 2 === 0;

            return (
              <Card
                key={srv.id}
                className={`p-6 sm:p-8 rounded-3xl border-border bg-card shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? "" : "lg:bg-muted/30"
                }`}
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h2 className="font-display font-bold text-2xl text-foreground">{srv.title}</h2>
                  <p className="text-xs font-semibold text-primary flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> Recommended For: {srv.targetAudience}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Key Service Inclusions:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-foreground font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Button
                      size="sm"
                      className="font-semibold text-xs gap-2"
                      onClick={() => onRequestQuote(srv.title)}
                    >
                      Request {srv.title} <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-background p-6 rounded-2xl border border-border space-y-4">
                  <h4 className="font-display font-bold text-sm text-foreground">Supported Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {srv.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-muted-foreground leading-relaxed border-t border-border">
                    Have custom technical requirements or non-standard specifications? Contact our engineering team for a personalized roadmap.
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
