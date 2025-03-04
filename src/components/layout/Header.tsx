
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* My Account Link */}
          <Link 
            to="/account" 
            className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <User className="h-5 w-5" />
            <span className="font-medium">My Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
