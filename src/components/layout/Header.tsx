
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/contexts/SearchContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  }, [location]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchVisible) setIsSearchVisible(false);
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

  const menuItems = [
    { name: "Pagrindinis", path: "/" },
    { name: "Visi pasiūlymai", path: "/all-deals" },
    { name: "Kategorijos", path: "#", submenu: [
      { name: "Sportas", path: "/category/sportas" },
      { name: "Maistas", path: "/category/maistas" },
      { name: "Apranga", path: "/category/apranga" },
      { name: "Sveikata", path: "/category/sveikata" },
      { name: "Žaidimai", path: "/category/zaidimai" },
      { name: "Finansai", path: "/category/finansai" },
    ]},
    { name: "Išsaugoti pasiūlymai", path: "/saved" },
    { name: "Apie mus", path: "/about" },
    { name: "DUK", path: "/faq" },
    { name: "Partneriai", path: "/partners" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMenuOpen
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
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Pagrindinis
              </Link>
              <Link to="/all-deals" className="text-sm font-medium hover:text-primary transition-colors">
                Visi pasiūlymai
              </Link>
              <Link to="/category/sportas" className="text-sm font-medium hover:text-primary transition-colors">
                Kategorijos
              </Link>
              <Link to="/saved" className="text-sm font-medium hover:text-primary transition-colors">
                Išsaugoti
              </Link>
            </nav>
          </div>

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

          {/* Mobile Menu & Search */}
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
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
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
        
        {/* Mobile Menu - Collapsible */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[80vh] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <nav className="flex flex-col space-y-3 bg-secondary/50 rounded-xl p-4">
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.submenu ? (
                  <div className="space-y-2">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
