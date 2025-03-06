
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/contexts/SearchContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchQuery, performSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsSearchVisible(false);
  }, [location]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery);
      performSearch(localSearchQuery);
      navigate('/search');
      setIsSearchVisible(false);
    }
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/category/zaidimai" className="text-foreground/80 hover:text-primary transition-colors">
              Žaidimai
            </Link>
            <Link to="/category/finansai" className="text-foreground/80 hover:text-primary transition-colors">
              Finansai
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
              Apie mus
            </Link>
          </nav>

          {/* Desktop Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Ieškoti nuolaidų..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full text-sm bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none w-[180px] focus:w-[240px]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
            <Link to="/saved">
              <ShoppingCart className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
          </div>

          {/* Mobile Search & Cart */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleSearch} 
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Paieška"
            >
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <Link to="/saved" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <ShoppingCart className="h-5 w-5 text-foreground" />
            </Link>
          </div>
        </div>
        
        {/* Mobile Search Bar - Collapsible */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isSearchVisible ? 'max-h-20 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Ieškoti nuolaidų..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full text-sm bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white p-1 rounded-full"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
