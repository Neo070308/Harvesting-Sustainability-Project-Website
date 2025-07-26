import { Instagram, Facebook, Home } from "lucide-react";

const SocialMedia = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay connected and see the impact we're making together in our community
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.instagram.com/mobile.harvesters/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg px-6 py-4 font-medium shadow-md hover:shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
            
            <a
              href="https://www.facebook.com/profile.php?id=61577121942246"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg px-6 py-4 font-medium shadow-md hover:shadow-lg"
            >
              <Facebook className="w-5 h-5" />
              Like on Facebook
            </a>
            
            <a
              href="https://nextdoor.com/business-profile/preview/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white hover:bg-green-700 transition-colors rounded-lg px-6 py-4 font-medium shadow-md hover:shadow-lg"
            >
              <Home className="w-5 h-5" />
              Find us on Nextdoor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;