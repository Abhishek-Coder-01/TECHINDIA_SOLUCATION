import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CLIENT_REVIEWS, COMPANY_INFO } from "@/data/contentData";
import { Star, ExternalLink, MessageSquare, CheckCircle2 } from "lucide-react";
import { ClientReviewDialog } from "@/components/ClientReviewDialog";

interface ReviewsPageProps {
  onRequestQuote: () => void;
}

export default function ReviewsPage({ onRequestQuote }: ReviewsPageProps) {
  return (
    <div className="min-h-screen bg-background pt-[72px] pb-20">
      {/* Page Header */}
      <section className="py-16 bg-card border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 px-3 py-1 mb-4">
            Genuine Feedback
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
            Student & Client Ratings & Reviews
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Read real feedback from college students, shop owners, and business clients who received project development and web services from TECHINDIA SOLUTIONS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ClientReviewDialog
              triggerLabel="Submit A Client Review"
              triggerVariant="default"
              triggerClassName="font-semibold text-sm"
            />
            <Button variant="outline" className="font-semibold text-sm gap-2" onClick={onRequestQuote}>
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLIENT_REVIEWS.map((rev) => (
              <Card key={rev.id} className="p-8 rounded-3xl border-border bg-card shadow-sm space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-5 h-5 ${j < Math.round(rev.rating) ? "fill-current" : "opacity-30"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{rev.date}</span>
                  </div>

                  <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                    "{rev.reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground">{rev.clientName}</h3>
                    <p className="text-xs text-muted-foreground">{rev.clientType}</p>
                  </div>

                  <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary border-primary/20">
                    {rev.serviceUsed}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border text-center space-y-4 max-w-2xl mx-auto mt-12">
            <h3 className="font-display font-bold text-xl text-foreground">Have You Worked With TECHINDIA SOLUTIONS?</h3>
            <p className="text-xs text-muted-foreground">
              Your honest feedback helps us improve our project development and website support services.
            </p>
            <ClientReviewDialog
              triggerLabel="Submit A Client Review"
              triggerVariant="outline"
              triggerSize="sm"
              triggerClassName="font-semibold text-xs"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
