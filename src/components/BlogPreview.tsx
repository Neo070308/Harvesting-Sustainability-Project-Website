import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Heart } from "lucide-react";

const BlogPreview = () => {
  const blogPosts = [];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-subtle rounded-xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Stay Connected</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Get the latest updates on our impact, volunteer opportunities, and community stories 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button 
                  variant="cta"
                  onClick={() => {
                    alert('Thank you for subscribing! You will receive updates about our blog posts.');
                  }}
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;