import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS } from "@/data/contentData";
import { Linkedin, Github, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface TeamPageProps {
  onRequestQuote: () => void;
}

export default function TeamPage({ onRequestQuote }: TeamPageProps) {
  return (
    <div className="min-h-screen bg-background pt-[72px] pb-20">
      {/* Page Header */}
      <section className="py-16 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-4">
            Founder-Led Team
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
            Meet the Core Team Behind TECHINDIA SOLUTIONS
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            We are a transparent, 2-person engineering team. When you work with TECHINDIA SOLUTIONS, you communicate directly with the software engineers writing your code.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.id} className="p-6 sm:p-8 rounded-3xl border-border bg-card shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 shadow-md flex-shrink-0"
                />

                <div className="space-y-3 text-center sm:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    {member.isFounder && (
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-bold">
                        Founder / Admin
                      </Badge>
                    )}
                    <span className="text-xs font-semibold text-muted-foreground">TECHINDIA SOLUTIONS</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-foreground">{member.name}</h2>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Core Technical Skills:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((sk) => (
                      <span key={sk} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Key Responsibilities:</h4>
                  <div className="space-y-1.5">
                    {member.responsibilities.map((resp) => (
                      <div key={resp} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <div className="text-center p-8 rounded-3xl bg-card border border-border space-y-4">
            <h3 className="font-display font-bold text-xl text-foreground">Have Questions for Our Tech Team?</h3>
            <p className="text-xs text-muted-foreground">Contact us directly on WhatsApp or submit your project scope online.</p>
            <Button size="lg" className="font-semibold text-sm gap-2" onClick={onRequestQuote}>
              Get In Touch With Founders <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
