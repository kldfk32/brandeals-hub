
import React, { useEffect } from "react";
import { useSearch } from "@/contexts/SearchContext";
import PromoCard from "@/components/ui/PromoCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SearchResults = () => {
  const { searchQuery, searchResults } = useSearch();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Paieškos rezultatai: "{searchQuery}"
            </h1>
            <p className="text-muted-foreground">
              {searchResults.length > 0 
                ? `Rasta ${searchResults.length} pasiūlymų`
                : 'Nerasta pasiūlymų pagal jūsų paiešką'
              }
            </p>
          </div>
          
          {searchResults.length > 0 ? (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {searchResults.map((deal) => (
                <motion.div key={deal.id} variants={item}>
                  <PromoCard {...deal} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl mb-4">Neradome jokių pasiūlymų, atitinkančių jūsų paiešką.</p>
              <p className="text-muted-foreground">Bandykite ieškoti kitų žodžių arba naršykite mūsų kategorijas.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
