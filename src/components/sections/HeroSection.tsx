
import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="pt-24 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Discover the Best <span className="text-primary">Deals</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Exclusive promo codes and discounts all in one place. Save big on your favorite products and services.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-xl mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for brands, products, or deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-full text-lg bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none shadow-subtle"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
