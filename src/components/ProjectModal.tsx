import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectItem } from "@/data/contentData";
import { ExternalLink, Github, CheckCircle2, Layers } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (serviceName: string) => void;
}

export function ProjectModal({ project, isOpen, onClose, onRequestQuote }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto sm:rounded-2xl p-6">
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="secondary" className="font-medium text-xs bg-primary/10 text-primary border-primary/20">
              {project.category}
            </Badge>
            {project.technology.map((tech) => (
              <Badge key={tech} variant="outline" className="text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
          <DialogTitle className="text-2xl font-display font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {project.shortDesc}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-3">
          {/* Screenshot preview */}
          <div className="rounded-xl overflow-hidden border border-border shadow-md bg-muted">
            <img src={project.image} alt={project.title} className="w-full h-[260px] sm:h-[340px] object-cover object-top" />
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-card border border-border space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">The Problem / Requirement</h4>
              <p className="text-sm leading-relaxed text-foreground">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">What TechIndia Built</h4>
              <p className="text-sm leading-relaxed text-foreground">{project.solution}</p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-base text-foreground flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" /> Key Project Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/50 border border-border/50 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl && (
              <Button size="sm" className="gap-2 font-semibold text-xs" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" className="gap-2 text-xs" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5" /> GitHub Repo
                </a>
              </Button>
            )}
          </div>
          <Button
            size="sm"
            className="gap-2 text-xs font-semibold"
            onClick={() => {
              onClose();
              onRequestQuote(project.title);
            }}
          >
            Request Similar Project
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
