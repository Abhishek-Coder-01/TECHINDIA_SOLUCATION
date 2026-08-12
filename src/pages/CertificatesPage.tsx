import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CERTIFICATES, CertificateItem } from "@/data/contentData";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

interface CertificatesPageProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export default function CertificatesPage({ onSelectCertificate }: CertificatesPageProps) {
  return (
    <div className="min-h-screen bg-background pt-[72px] pb-20">
      {/* Page Header */}
      <section className="py-16 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-4">
            Official Proof
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
            Genuine Certificates & Achievements
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Verified enterprise quality certifications and technical excellence achievements belonging to TECHINDIA SOLUTIONS.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATES.map((cert) => (
              <Card
                key={cert.id}
                className="p-6 rounded-3xl border-border bg-card shadow-sm space-y-4 hover:border-primary/40 transition-all cursor-pointer"
                onClick={() => onSelectCertificate(cert)}
              >
                <div className="rounded-2xl overflow-hidden border border-border bg-muted h-[220px]">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                      <Award className="w-4 h-4" /> {cert.year}
                    </span>
                    <span className="text-xs text-muted-foreground">{cert.recipient}</span>
                  </div>

                  <h2 className="font-display font-bold text-xl text-foreground hover:text-primary transition-colors">
                    {cert.title}
                  </h2>

                  <p className="text-xs text-muted-foreground">Issued by {cert.issuer}</p>

                  <p className="text-xs text-foreground/80 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Verified Credential
                  </span>

                  {cert.verificationUrl && (
                    <Button size="sm" variant="outline" className="text-xs gap-1.5" asChild onClick={(e) => e.stopPropagation()}>
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5" /> Verify Link
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
