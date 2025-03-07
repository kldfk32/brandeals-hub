
import React, { useEffect, useState } from "react";
import { deals } from "@/data/deals";
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

const AllDeals = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [sortedDeals, setSortedDeals] = useState([...deals]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Sort deals based on the selected option
    const sorted = [...deals].sort((a, b) => {
      if (sortBy === "newest") {
        const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
        const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
        return dateB - dateA;
      } else if (sortBy === "expiring") {
        const dateA = new Date(a.expiryDate).getTime();
        const dateB = new Date(b.expiryDate).getTime();
        return dateA - dateB;
      } else if (sortBy === "discount") {
        // Extract discount percentage (assumes format like "25% NUOLAIDA")
        const getDiscountValue = (discount: string) => {
          const match = discount.match(/(\d+)/);
          return match ? parseInt(match[0], 10) : 0;
        };
        return getDiscountValue(b.discount) - getDiscountValue(a.discount);
      }
      return 0;
    });
    
    setSortedDeals(sorted);
  }, [sortBy]);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Visi pasiūlymai</h1>
            <p className="text-muted-foreground max-w-3xl">
              Peržiūrėkite visus mūsų svetainėje esančius pasiūlymus ir akcijų kodus. Nuolat atnaujiname šį sąrašą naujausiais pasiūlymais iš jūsų mėgstamiausių prekių ženklų.
            </p>
          </div>
          
          {/* Sorting controls */}
          <div className="mb-8 flex justify-end">
            <div className="inline-flex bg-secondary rounded-lg p-1">
              <button
                onClick={() => setSortBy("newest")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  sortBy === "newest" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Naujausi
              </button>
              <button
                onClick={() => setSortBy("expiring")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  sortBy === "expiring" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Besibaigiantys
              </button>
              <button
                onClick={() => setSortBy("discount")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  sortBy === "discount" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Didžiausios nuolaidos
              </button>
            </div>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {sortedDeals.map((deal) => (
              <motion.div key={deal.id} variants={item}>
                <PromoCard {...deal} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllDeals;
