
import React from "react";
import { Link } from "react-router-dom";
import PromoCard from "../ui/PromoCard";
import { motion } from "framer-motion";
import { getFeaturedDeals } from "@/data/deals";

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
  const featuredDeals = getFeaturedDeals();
  
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
