import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { CertificateModal } from "@/components/CertificateModal";
import { ProjectItem, CertificateItem } from "@/data/contentData";

import Landing from "./pages/Landing";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import CertificatesPage from "./pages/CertificatesPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AppContent = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const navigate = useNavigate();

  const handleOpenEnquiry = (_serviceName?: string) => {
    navigate("/contact");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar onRequestQuote={() => handleOpenEnquiry()} />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                onRequestQuote={handleOpenEnquiry}
                onSelectProject={(proj) => setActiveProject(proj)}
                onSelectCertificate={(cert) => setActiveCertificate(cert)}
              />
            }
          />
          <Route path="/about" element={<AboutPage onRequestQuote={() => handleOpenEnquiry()} />} />
          <Route path="/services" element={<ServicesPage onRequestQuote={handleOpenEnquiry} />} />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                onSelectProject={(proj) => setActiveProject(proj)}
                onRequestQuote={handleOpenEnquiry}
              />
            }
          />
          <Route path="/team" element={<TeamPage onRequestQuote={() => handleOpenEnquiry()} />} />
          <Route
            path="/certificates"
            element={<CertificatesPage onSelectCertificate={(cert) => setActiveCertificate(cert)} />}
          />
          <Route path="/reviews" element={<ReviewsPage onRequestQuote={() => handleOpenEnquiry()} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer onRequestQuote={() => handleOpenEnquiry()} />

      {/* Interactive Modals */}

      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        onRequestQuote={(srv) => handleOpenEnquiry(srv)}
      />

      <CertificateModal
        certificate={activeCertificate}
        isOpen={!!activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
