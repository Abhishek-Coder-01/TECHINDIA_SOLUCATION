import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { COMPANY_INFO, FAQ_LIST } from "@/data/contentData";
import { Phone, Mail, Send, CheckCircle2, MapPin, ExternalLink, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    userType: "Student",
    serviceRequired: "Final Year Projects",
    projectName: "",
    existingLink: "",
    description: "",
    preferredContact: "WhatsApp",
    additionalMessage: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      toast({
        title: "Missing required details",
        description: "Please enter your Full Name and WhatsApp / Contact Number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || "Unable to send your requirement");
      }

      setSubmitted(true);
      toast({
        title: "Requirement Sent Successfully!",
        description: "Your requirement has been sent to our team by email.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-[72px] pb-20">
      {/* Page Header */}
      <section className="py-16 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-4">
            Contact & Enquiries
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
            Request a Project or Contact Our Team
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Fill out our requirement form below or reach out directly on WhatsApp, phone, or email.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Direct Contacts & WhatsApp */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl text-foreground">Direct Contact Options</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We respond fastest on WhatsApp! You can also call us or send an email.
                </p>
              </div>

              {/* Primary WhatsApp Card */}
              <Card className="p-6 rounded-2xl border-emerald-500/30 bg-emerald-500/5 space-y-4">
                <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base">WhatsApp Quick Contact</h3>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">Fastest response time (&lt; 15 mins)</p>
                  </div>
                </div>

                <p className="text-xs text-foreground/80 leading-relaxed">
                  Message us directly with your project topic or website requirement for an instant response.
                </p>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs gap-2" asChild>
                  <a href={COMPANY_INFO.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-4 h-4 fill-current" /> Chat on WhatsApp ({COMPANY_INFO.phone})
                  </a>
                </Button>
              </Card>

              {/* Phone & Email */}
              <div className="space-y-4">
                <Card className="p-5 rounded-2xl border-border bg-card flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground">Phone Call</h4>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </Card>

                <Card className="p-5 rounded-2xl border-border bg-card flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground">Email Support</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </Card>

                <Card className="p-5 rounded-2xl border-border bg-card flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground">Google Form Option</h4>
                    <a href={COMPANY_INFO.googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-semibold hover:underline flex items-center gap-1">
                      Open Requirement Form <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </Card>
              </div>

              {/* Social Links */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted-foreground">Follow & Connect:</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(COMPANY_INFO.socialLinks).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground hover:text-primary hover:border-primary/40 transition-colors capitalize"
                    >
                      {key}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: 11-Field Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 rounded-3xl border-border bg-card shadow-sm space-y-6">
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground">Project Requirement Form</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill out all details so our engineers can review your scope accurately.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">Requirement Received!</h3>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Thank you for submitting your project requirement to TECHINDIA SOLUTIONS.
                    </p>
                    <Button variant="outline" className="text-xs font-semibold" onClick={() => setSubmitted(false)}>
                      Submit Another Requirement
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 1. Full Name */}
                      <div className="space-y-1.5">
                        <Label htmlFor="c-name" className="text-xs font-semibold">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="c-name"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          required
                        />
                      </div>

                      {/* 2. WhatsApp / Phone */}
                      <div className="space-y-1.5">
                        <Label htmlFor="c-phone" className="text-xs font-semibold">
                          WhatsApp / Contact Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="c-phone"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 3. Email */}
                      <div className="space-y-1.5">
                        <Label htmlFor="c-email" className="text-xs font-semibold">
                          Email Address
                        </Label>
                        <Input
                          id="c-email"
                          type="email"
                          placeholder="e.g. rahul@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                      </div>

                      {/* 4. School / College / Company / Shop */}
                      <div className="space-y-1.5">
                        <Label htmlFor="c-org" className="text-xs font-semibold">
                          School / College / Company / Shop
                        </Label>
                        <Input
                          id="c-org"
                          placeholder="e.g. ABC College / Sharma Store"
                          value={formData.organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 5. User Type */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">User Type</Label>
                        <Select value={formData.userType} onValueChange={(val) => handleChange("userType", val)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Student">Student (B.Tech, BCA, MCA)</SelectItem>
                            <SelectItem value="Shop Owner">Shop Owner</SelectItem>
                            <SelectItem value="Small Business">Small Business</SelectItem>
                            <SelectItem value="Company">Company / Enterprise</SelectItem>
                            <SelectItem value="Individual">Individual</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* 6. Service Required */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">Service Required</Label>
                        <Select value={formData.serviceRequired} onValueChange={(val) => handleChange("serviceRequired", val)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Final Year Projects">Final Year Projects</SelectItem>
                            <SelectItem value="Mini & Major Projects">Mini & Major Projects</SelectItem>
                            <SelectItem value="Website Development">Website Development</SelectItem>
                            <SelectItem value="Shop / Business Websites">Shop / Business Websites</SelectItem>
                            <SelectItem value="AI / ML Solutions">AI / ML Solutions</SelectItem>
                            <SelectItem value="Python / Java / MERN Development">Python / Java / MERN Development</SelectItem>
                            <SelectItem value="Bug Fixing & Technical Support">Bug Fixing & Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 7. Project / Website Name */}
                      <div className="space-y-1.5">
                        <Label htmlFor="c-proj" className="text-xs font-semibold">
                          Project / Website Name
                        </Label>
                        <Input
                          id="c-proj"
                          placeholder="e.g. Smart Billing Web App"
                          value={formData.projectName}
                          onChange={(e) => handleChange("projectName", e.target.value)}
                        />
                      </div>

                      {/* 8. Existing Website / GitHub Link */}
                      <div className="space-y-1.5">
                        <Label htmlFor="c-link" className="text-xs font-semibold">
                          Existing Website / GitHub Link
                        </Label>
                        <Input
                          id="c-link"
                          placeholder="https://..."
                          value={formData.existingLink}
                          onChange={(e) => handleChange("existingLink", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* 9. Requirement Description */}
                    <div className="space-y-1.5">
                      <Label htmlFor="c-desc" className="text-xs font-semibold">
                        Requirement Description
                      </Label>
                      <Textarea
                        id="c-desc"
                        rows={3}
                        placeholder="Explain project features, syllabus guidelines, tech stack preference, deadline, etc."
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                      />
                    </div>

                    {/* 10. Preferred Contact Method */}
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold">Preferred Contact Method</Label>
                      <RadioGroup
                        value={formData.preferredContact}
                        onValueChange={(val) => handleChange("preferredContact", val)}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="WhatsApp" id="cp-wa" />
                          <Label htmlFor="cp-wa" className="text-xs cursor-pointer font-medium">WhatsApp</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Phone" id="cp-phone" />
                          <Label htmlFor="cp-phone" className="text-xs cursor-pointer font-medium">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Email" id="cp-email" />
                          <Label htmlFor="cp-email" className="text-xs cursor-pointer font-medium">Email</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* 11. Additional Message */}
                    <div className="space-y-1.5">
                      <Label htmlFor="c-extra" className="text-xs font-semibold">
                        Additional Notes (Optional)
                      </Label>
                      <Input
                        id="c-extra"
                        placeholder="Budget preference or specific timeline notes"
                        value={formData.additionalMessage}
                        onChange={(e) => handleChange("additionalMessage", e.target.value)}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-semibold text-sm gap-2 pt-2" disabled={isSubmitting}>
                      <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Submit & Send via Email"}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>

          {/* Accordion FAQ */}
          <div className="mt-20 max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-2">
                FAQ
              </Badge>
              <h3 className="font-display font-bold text-2xl text-foreground">Frequently Asked Questions</h3>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQ_LIST.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`contact-faq-${index}`}
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
        </div>
      </section>
    </div>
  );
}
