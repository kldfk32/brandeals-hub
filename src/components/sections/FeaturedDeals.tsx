
import React from "react";
import PromoCard from "../ui/PromoCard";
import { motion } from "framer-motion";

// Sample data for featured deals
const featuredDeals = [
  {
    id: "1",
    title: "25% nuolaida sporto bateliams",
    brand: "Nike",
    code: "NIKE25",
    expiryDate: "2023-12-31",
    discount: "25% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sportas",
    featured: true,
  },
  {
    id: "2",
    title: "Pirk vieną, gauk kitą nemokamai",
    brand: "Subway",
    code: "SUBWAYB1G1",
    expiryDate: "2023-11-15",
    discount: "2UŽ1",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
    category: "Maistas",
    featured: true,
  },
  {
    id: "3",
    title: "Nemokamas pristatymas virš 50€",
    brand: "H&M",
    code: "HMSHIP",
    expiryDate: "2023-10-30",
    discount: "NEMOKAMAS PRISTATYMAS",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    category: "Apranga",
    featured: true,
  },
  {
    id: "4",
    title: "30% nuolaida pirmam mėnesiui",
    brand: "Planet Fitness",
    code: "FIT30",
    expiryDate: "2023-12-01",
    discount: "30% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    category: "Sveikata",
    featured: true,
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

const FeaturedDeals = () => {
  return (
    <section className="py-14">
      <div className="container-custom">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Aktualūs pasiūlymai</h2>
            <p className="text-muted-foreground max-w-2xl">
              Kruopščiai atrinkti pasiūlymai iš geriausių prekės ženklų, specialiai sukurti maksimaliam taupymui.
            </p>
          </div>
          <a href="/deals" className="mt-4 md:mt-0 button-outline">
            Visi pasiūlymai
          </a>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredDeals.map((deal) => (
            <motion.div key={deal.id} variants={item}>
              <PromoCard {...deal} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDeals;

