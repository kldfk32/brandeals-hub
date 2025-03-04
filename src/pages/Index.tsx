
import React, { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedDeals from "@/components/sections/FeaturedDeals";
import CategorySection from "@/components/sections/CategorySection";
import PromoCard from "@/components/ui/PromoCard";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sample data for all deals
const allDeals = [
  {
    id: "1",
    title: "25% Off Athletic Shoes",
    brand: "Nike",
    code: "NIKE25",
    expiryDate: "2023-12-31",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sport",
    featured: true,
  },
  {
    id: "2",
    title: "Buy One Get One Free",
    brand: "Subway",
    code: "SUBWAYB1G1",
    expiryDate: "2023-11-15",
    discount: "BOGO",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
    category: "Food",
    featured: true,
  },
  {
    id: "3",
    title: "Free Shipping on $50+",
    brand: "H&M",
    code: "HMSHIP",
    expiryDate: "2023-10-30",
    discount: "FREE SHIPPING",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    category: "Clothing",
    featured: true,
  },
  {
    id: "4",
    title: "30% Off First Month",
    brand: "Planet Fitness",
    code: "FIT30",
    expiryDate: "2023-12-01",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    category: "Health",
    featured: true,
  },
  {
    id: "5",
    title: "50% Off First Order",
    brand: "DoorDash",
    code: "DASH50",
    expiryDate: "2023-11-20",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9",
    category: "Food",
  },
  {
    id: "6",
    title: "15% Off Sitewide",
    brand: "Adidas",
    code: "ADIDAS15",
    expiryDate: "2023-12-15",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    category: "Sport",
  },
  {
    id: "7",
    title: "$20 Off Your First Vitamin Order",
    brand: "Ritual",
    code: "RITUAL20",
    expiryDate: "2023-12-31",
    discount: "$20 OFF",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
    category: "Health",
  },
  {
    id: "8",
    title: "Buy 2 Get 1 Free",
    brand: "Gap",
    code: "GAP2GET1",
    expiryDate: "2023-11-30",
    discount: "B2G1",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
    category: "Clothing",
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
        
        <section className="py-14">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left sidebar with categories */}
              <div className="lg:col-span-1">
                <CategorySection />
              </div>
              
              {/* Main content area with all deals */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3">All Deals</h2>
                  <p className="text-muted-foreground">
                    Browse all available promo codes and discounts
                  </p>
                </div>
                
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {allDeals.map((deal) => (
                    <motion.div key={deal.id} variants={item}>
                      <PromoCard {...deal} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="rounded-3xl bg-gradient-to-r from-primary/10 to-primary/20 p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss a Deal Again</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Sign up for our newsletter and get the latest deals delivered straight to your inbox.
                </p>
                
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 rounded-lg bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  />
                  <button
                    type="submit"
                    className="button-primary px-6 py-3 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to our <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
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
