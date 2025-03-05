
import React, { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedDeals from "@/components/sections/FeaturedDeals";
import CategorySection from "@/components/sections/CategorySection";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sample data for trending deals
const trendingDeals = [
  {
    id: "5",
    title: "50% nuolaida pirmam užsakymui",
    brand: "DoorDash",
    code: "DASH50",
    expiryDate: "2023-11-20",
    discount: "50% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9",
    category: "Maistas",
  },
  {
    id: "6",
    title: "15% nuolaida visai svetainei",
    brand: "Adidas",
    code: "ADIDAS15",
    expiryDate: "2023-12-15",
    discount: "15% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    category: "Sportas",
  },
  {
    id: "7",
    title: "20€ nuolaida pirmam vitaminų užsakymui",
    brand: "Ritual",
    code: "RITUAL20",
    expiryDate: "2023-12-31",
    discount: "20€ NUOLAIDA",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
    category: "Sveikata",
  },
  {
    id: "8",
    title: "Perkant 2, trečią gaukite nemokamai",
    brand: "Gap",
    code: "GAP2GET1",
    expiryDate: "2023-11-30",
    discount: "3-as NEMOKAMAI",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
    category: "Apranga",
  },
];

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

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main>
        <HeroSection />
        
        <FeaturedDeals />
        
        <CategorySection />
        
        {/* Trending Deals Section */}
        <section className="py-14">
          <div className="container-custom">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Populiarūs pasiūlymai</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Populiariausi pasiūlymai, kuriuos pirkėjai šiuo metu mėgsta labiausiai.
                </p>
              </div>
              <a href="/trending" className="mt-4 md:mt-0 button-outline">
                Visi populiarūs pasiūlymai
              </a>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {trendingDeals.map((deal) => (
                <motion.div key={deal.id} variants={item} className="flex">
                  <div className="glass-card rounded-2xl p-4 flex flex-col md:flex-row w-full gap-4 transition-all duration-300 hover:shadow-card">
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl overflow-hidden shrink-0">
                      <img 
                        src={deal.image} 
                        alt={deal.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold line-clamp-1 mb-1">{deal.title}</h3>
                      <p className="text-sm text-muted-foreground">{deal.brand}</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {deal.discount}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Baigiasi netrukus
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="rounded-3xl bg-gradient-to-r from-primary/10 to-primary/20 p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nepražiopsokite nė vieno pasiūlymo</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Užsiregistruokite mūsų naujienlaiškiui ir gaukite naujausius pasiūlymus tiesiai į savo pašto dėžutę.
                </p>
                
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Įveskite savo el. paštą" 
                    className="flex-1 px-4 py-3 rounded-lg bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  />
                  <button
                    type="submit"
                    className="button-primary px-6 py-3 whitespace-nowrap"
                  >
                    Prenumeruoti
                  </button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Prenumeruodami, jūs sutinkate su mūsų <a href="/terms" className="underline">Naudojimosi taisyklėmis</a> ir <a href="/privacy" className="underline">Privatumo politika</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

