import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FEATURED_PROJECTS, ProjectItem } from "@/data/contentData";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: (serviceName?: string) => void;
}

export default function ProjectsPage({ onSelectProject, onRequestQuote }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "MERN Stack", "Shop Websites", "AI & ML", "Websites"];

  const filteredProjects = selectedCategory === "All"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-[72px] pb-20">
      {/* Page Header */}
      <section className="py-16 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-4">
            Our Work Portfolio
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
            Real Completed Projects & Case Studies
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Explore verified projects built by TECHINDIA SOLUTIONS. Every project card includes key features, screenshots, tech stack, and live demo/repo links where available.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Projects Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                className="text-xs font-semibold rounded-full px-4"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-border bg-card overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className="relative h-[220px] sm:h-[260px] overflow-hidden bg-muted cursor-pointer"
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

                    <h2
                      className="font-display font-bold text-xl text-foreground hover:text-primary transition-colors cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      {project.title}
                    </h2>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.shortDesc}
                    </p>

                    <div className="p-3 rounded-xl bg-muted/40 border border-border/50 text-xs space-y-1">
                      <div className="font-semibold text-foreground">Key Highlight:</div>
                      <div className="text-muted-foreground">{project.keyFeatures[0]}</div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-4">
                  <Button
                    size="sm"
                    className="text-xs font-semibold gap-1.5"
                    onClick={() => onSelectProject(project)}
                  >
                    View Case Study
                  </Button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="text-xs gap-1.5" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="text-xs gap-1.5" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5" /> Code Repo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center p-8 rounded-3xl bg-card border border-border space-y-4">
            <h3 className="font-display font-bold text-2xl text-foreground">Need a Custom Project or Website?</h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              We build custom websites, college projects, and shop systems tailored to your specific guidelines.
            </p>
            <Button size="lg" className="font-semibold text-sm gap-2" onClick={() => onRequestQuote()}>
              Request a Project Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
