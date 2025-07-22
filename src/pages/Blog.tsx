import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const additionalPosts = [
    {
      title: "Growing Your First Vegetable Garden",
      excerpt: "A beginner's guide to starting a productive home garden that can feed your family and help the community.",
      date: "December 10, 2024",
      category: "Gardening Tips"
    },
    {
      title: "The Science Behind Food Waste",
      excerpt: "Understanding the environmental impact of food waste and how small actions can make a big difference.",
      date: "December 5, 2024", 
      category: "Sustainability"
    },
    {
      title: "Volunteer Spotlight: Meet Sarah",
      excerpt: "Learn about one of our dedicated Mobile Harvesters and how she's making a difference in the community.",
      date: "November 28, 2024",
      category: "Community"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Stories, tips, and updates from the Harvesting Sustainability community.
            </p>
          </div>
        </div>
        
        <BlogPreview />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {post.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;