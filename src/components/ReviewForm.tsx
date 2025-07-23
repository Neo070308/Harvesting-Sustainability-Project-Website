import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, MessageSquarePlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Review {
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

interface ReviewFormProps {
  onAddReview: (review: Review) => void;
}

const ReviewForm = ({ onAddReview }: ReviewFormProps) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    content: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.content) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and review content.",
        variant: "destructive",
      });
      return;
    }

    const newReview: Review = {
      ...formData,
      rating,
    };

    onAddReview(newReview);
    
    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your experience with us.",
    });

    // Reset form
    setFormData({ name: "", role: "", location: "", content: "" });
    setRating(5);
    setOpen(false);
  };

  const renderStars = (currentRating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 cursor-pointer transition-colors ${
          i < currentRating ? "text-yellow-400 fill-current" : "text-gray-300 hover:text-yellow-200"
        }`}
        onClick={() => setRating(i + 1)}
      />
    ));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="group">
          <MessageSquarePlus className="w-4 h-4 mr-2" />
          Leave a Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Your Experience</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="e.g., Home Gardener, Volunteer"
            />
          </div>
          
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Mountain View, CA"
            />
          </div>
          
          <div>
            <Label>Rating</Label>
            <div className="flex items-center gap-1 mt-1">
              {renderStars(rating)}
            </div>
          </div>
          
          <div>
            <Label htmlFor="content">Your Review *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Share your experience with Harvesting Sustainability..."
              rows={4}
              required
            />
          </div>
          
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="default" className="flex-1">
              Submit Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewForm;