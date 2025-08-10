import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Newspaper, ArrowRight } from "lucide-react";

const NEWS_URL =
  "https://www.losaltosonline.com/schools/los-altos-teens-reducing-food-waste-by-collecting-produce-for-hope-s-corner/article_4fc53a04-011d-4a0a-a7e4-d9ed0e0b79b9.html";

const InTheNews = () => {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Los Altos teens reducing food waste by collecting produce for Hope’s Corner",
    url: NEWS_URL,
    mainEntityOfPage: NEWS_URL,
    publisher: {
      "@type": "Organization",
      name: "Los Altos Town Crier",
      url: "https://www.losaltosonline.com",
    },
    about: {
      "@type": "Organization",
      name: "Harvesting Sustainability Project",
    },
  };

  return (
    <section id="in-the-news" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            In the News
          </h2>
          <p className="text-muted-foreground mt-3">
            We were recently featured by the Los Altos Town Crier — check it out!
          </p>
        </header>

        <article className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/NewsArticle">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Newspaper className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <CardTitle className="text-xl sm:text-2xl">
                  Los Altos Town Crier Feature
                </CardTitle>
                <CardDescription className="mt-1">
                  Los Altos teens reducing food waste by collecting produce for Hope’s Corner
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground">
                The Los Altos Town Crier covered our journey of turning backyard surplus
                into community support through the Harvesting Sustainability Project.
              </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <a
                href={NEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium story-link"
                aria-label="Read the Los Altos Town Crier article about Harvesting Sustainability Project"
              >
                Read the article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </CardFooter>
          </Card>

          {/* JSON-LD structured data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
          />
        </article>
      </div>
    </section>
  );
};

export default InTheNews;
