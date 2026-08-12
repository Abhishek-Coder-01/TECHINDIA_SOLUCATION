import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { MessageSquare, Star } from "lucide-react";

type ButtonVariant = React.ComponentProps<typeof Button>["variant"];
type ButtonSize = React.ComponentProps<typeof Button>["size"];

interface ClientReviewDialogProps {
  triggerLabel?: string;
  triggerVariant?: ButtonVariant;
  triggerSize?: ButtonSize;
  triggerClassName?: string;
}

export function ClientReviewDialog({
  triggerLabel = "Submit A Client Review",
  triggerVariant = "outline",
  triggerSize = "default",
  triggerClassName,
}: ClientReviewDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [clientName, setClientName] = React.useState("");
  const [clientType, setClientType] = React.useState("Individual");
  const [reviewText, setReviewText] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const resetForm = () => {
    setClientName("");
    setClientType("Individual");
    setReviewText("");
    setRating(5);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = clientName.trim();
    const review = reviewText.trim();

    if (!name || !review) {
      toast({
        title: "Please complete the review form",
        description: "Your name and review text are required before submitting.",
      });
      return;
    }

setIsSubmitting(true);
toast({
  title: "Review submitted",
  description: "The admin will review your submission and add it if approved.",
});

    resetForm();
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} size={triggerSize} className={cn("gap-2", triggerClassName)}>
          <MessageSquare className="w-4 h-4" />
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Share Your Experience</DialogTitle>
          <DialogDescription>
            Add your client review, choose a star rating, and help others understand how we work.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="review-name">Your Name</Label>
              <Input
                id="review-name"
                value={clientName}
                onChange={(event) => setClientName(event.target.value)}
                placeholder="Enter your name"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="review-type">Client Type</Label>
              <Select value={clientType} onValueChange={setClientType}>
                <SelectTrigger id="review-type">
                  <SelectValue placeholder="Select client type" />
                </SelectTrigger>
                <SelectContent>
                  {["College Student", "Shop Owner", "Small Business", "Individual"].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Star Rating</Label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((value) => {
                const active = value <= rating;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-label={`${value} star rating`}
                    onClick={() => setRating(value)}
                    className={cn(
                      "rounded-full p-1 transition-colors",
                      active ? "text-amber-500" : "text-muted-foreground/40 hover:text-amber-400",
                    )}
                  >
                    <Star className={cn("w-6 h-6", active && "fill-current")} />
                  </button>
                );
              })}
              <span className="ml-2 text-sm text-muted-foreground">{rating}/5</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="review-text">Your Review</Label>
            <Textarea
              id="review-text"
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
              placeholder="Tell us about your experience..."
              className="min-h-[140px]"
            />
          </div>

          <DialogFooter className="pt-2 gap-3">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="sm:order-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="gap-2 sm:order-2">
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
