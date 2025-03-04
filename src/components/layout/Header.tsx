
import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              2rism<span className="text-primary text-xs">★</span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Hotels", "Restaurants", "Tours", "Destinations", "Activities", "Contact"].map((item) => (
              <Link 
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* User Account */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-white/80 text-xs">Holla,</p>
              <p className="text-white text-sm font-medium">Ales Nesetril</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-white/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                alt="User profile" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
