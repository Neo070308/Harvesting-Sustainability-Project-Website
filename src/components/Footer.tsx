import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Mail, Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Meet the Team", href: "/team" },
      { name: "Blog", href: "/blog" }
    ],
    getInvolved: [
      { name: "Volunteer", href: "/volunteer" },
      { name: "Contact Us", href: "/contact" },
      { name: "Schedule Harvest", href: "/#harvest-form" },
      { name: "Get Involved", href: "/#get-involved" }
    ],
    resources: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "How It Works", href: "/how-it-works" }
    ]
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <img src={logoIcon} alt="Harvesting Sustainability" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Harvesting Sustainability</h3>
                  <p className="text-sm text-muted-foreground">Growing Community Impact</p>
                </div>
              </div>
              
              <p className="text-muted-foreground max-w-md">
                Turning backyard surplus into community support. Join us in reducing food waste 
                and feeding families across Mountain View and beyond.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://www.instagram.com/mobile.harvesters/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Follow Us
                  </a>
                </Button>
                
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="mailto:mobile.harvesters650@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">About</h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Get Involved</h4>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Harvesting Sustainability Project.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for our community.</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Leaf className="w-4 h-4 text-primary" />
                <span>388 lbs donated</span>
              </div>
              <span>•</span>
              <span>Serving Mountain View, CA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;