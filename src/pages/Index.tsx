
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedDeals from "@/components/sections/FeaturedDeals";
import CategorySection from "@/components/sections/CategorySection";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getNewestDeals } from "@/data/deals";

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
  const newestDeals = getNewestDeals();
  
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
        
        {/* Newest Deals Section */}
        <section className="py-14">
          <div className="container-custom">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Naujausi pasiūlymai</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Patys naujausi pasiūlymai, kuriuos ką tik pridėjome į mūsų svetainę.
                </p>
              </div>
              <Link to="/all-deals" className="mt-4 md:mt-0 button-outline">
                Visi pasiūlymai
              </Link>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {newestDeals.map((deal) => (
                <motion.div key={deal.id} variants={item} className="flex">
                  <Link to={`/deal/${deal.id}`} className="w-full">
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
                            Naujas pasiūlymas
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Newsletter Subscription Section */}
        <section className="py-20">
          <div className="container-custom">
            <NewsletterSubscription />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
