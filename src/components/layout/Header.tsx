import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Removing the categories array
// const categories = [
//   { name: "Sportas", path: "/category/sport" },
//   { name: "Maistas", path: "/category/food" },
//   { name: "Apranga", path: "/category/clothing" },
//   { name: "Sveikata", path: "/category/health" },
// ];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
    console.log("Ieškoma:", searchQuery);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              BRANDEALS
            </h1>
          </Link>

          {/* Desktop Navigation - Removed categories */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Categories have been removed */}
          </nav>

          {/* Desktop Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Ieškoti nuolaidų..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full text-sm bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none w-[180px] focus:w-[240px]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
            <Link to="/account">
              <User className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link to="/saved">
              <ShoppingCart className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center"
            aria-label={isMobileMenuOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
        <div className="absolute right-0 top-0 bottom-0 w-[75%] max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col">
          <div className="p-6 space-y-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Ieškoti nuolaidų..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full text-sm bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
            
            {/* Removing categories section from mobile menu */}
            
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Paskyra</h3>
              <Link
                to="/account"
                className="flex items-center space-x-2 py-2 text-base font-medium"
              >
                <User className="h-5 w-5" />
                <span>Mano paskyra</span>
              </Link>
              <Link
                to="/saved"
                className="flex items-center space-x-2 py-2 text-base font-medium"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Išsaugotos nuolaidos</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-auto border-t border-border p-6">
            <div className="flex space-x-4">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">Apie mus</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Kontaktai</Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">DUK</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
