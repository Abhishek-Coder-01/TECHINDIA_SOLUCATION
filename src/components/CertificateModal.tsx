import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CertificateItem } from "@/data/contentData";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl sm:rounded-2xl p-6">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1">
            <Award className="w-4 h-4" /> Official Credential & Certificate
          </div>
          <DialogTitle className="text-xl font-display font-bold text-foreground">
            {certificate.title}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Issued by {certificate.issuer} • Recipient: {certificate.recipient} ({certificate.year})
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-3">
          <div className="rounded-xl overflow-hidden border border-border shadow-md bg-muted">
            <img src={certificate.image} alt={certificate.title} className="w-full h-auto max-h-[360px] object-contain mx-auto" />
          </div>

          <div className="p-4 rounded-xl bg-card border border-border space-y-1.5 text-xs">
            <h4 className="font-semibold text-foreground flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Genuine Verified Record
            </h4>
            <p className="text-muted-foreground leading-relaxed">{certificate.description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
          {certificate.verificationUrl ? (
            <Button size="sm" variant="outline" className="gap-2 text-xs" asChild>
              <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" /> Verify Link
              </a>
            </Button>
          ) : (
            <span className="text-xs text-muted-foreground">Verified Document</span>
          )}
          <Button size="sm" onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
