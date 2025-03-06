
import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/contexts/SearchContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { setSearchQuery, performSearch } = useSearch();
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery);
      performSearch(localSearchQuery);
      navigate('/search');
    }
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container-custom text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Atraskite geriausias <span className="text-primary">nuolaidas</span> iš jūsų mėgstamiausių prekės ženklų
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Išskirtiniai akcijų kodai ir nuolaidos vienoje vietoje. Taupykite perkant mėgstamus produktus ir paslaugas.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Ieškoti prekių ženklų, produktų ar nuolaidų..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-full text-lg bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none shadow-subtle"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
                aria-label="Ieškoti"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
          
          <div className="flex flex-wrap justify-center gap-2 items-center text-sm text-muted-foreground">
            <span>Populiaru:</span>
            {["Nike", "Maisto pristatymas", "Žaidimai", "Kelionės", "Finansai"].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setLocalSearchQuery(term);
                  setSearchQuery(term);
                  performSearch(term);
                  navigate('/search');
                }}
                className="bg-secondary px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
