
import React from "react";
import CategoryCard from "../ui/CategoryCard";
import { motion } from "framer-motion";
import { categories } from "@/data/deals";

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

const CategorySection = () => {
  return (
    <section className="py-14 bg-secondary">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Naršyti pagal kategoriją</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Raskite geriausias nuolaidas mėgstamose kategorijose, nuo mados iki maisto ir visko tarp jų.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
