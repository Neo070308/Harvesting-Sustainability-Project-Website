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
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Latest Updates
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              From Our Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest impact stories, volunteer spotlights, and community news. 
              Discover how together we're making a difference, one harvest at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group/btn p-0 h-auto"
                      onClick={() => window.location.href = '/blog'}
                    >
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/blog'}
            >
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

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