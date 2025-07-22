import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Blog", href: "/blog" },
    { name: "Get Involved", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <img src={logoIcon} alt="Harvesting Sustainability" className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Harvesting Sustainability</h1>
              <p className="text-xs text-muted-foreground">Growing Community Impact</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="cta" 
              size="sm" 
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('harvest-form')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#harvest-form';
                }
              }}
            >
              Schedule Harvest
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <Button 
                variant="cta" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (window.location.pathname === '/') {
                    setTimeout(() => {
                      document.getElementById('harvest-form')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    window.location.href = '/#harvest-form';
                  }
                }}
              >
                Schedule Harvest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;