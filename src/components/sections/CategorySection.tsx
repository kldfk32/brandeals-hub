
import React from "react";
import CategoryCard from "../ui/CategoryCard";
import { motion } from "framer-motion";

// Sample data for categories
const categories = [
  {
    title: "Sport",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    count: 42,
    slug: "sport",
  },
  {
    title: "Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    count: 56,
    slug: "food",
  },
  {
    title: "Clothing",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    count: 78,
    slug: "clothing",
  },
  {
    title: "Health",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
    count: 35,
    slug: "health",
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

const CategorySection = () => {
  return (
    <section className="py-14 bg-secondary">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the best deals in your favorite categories, from fashion to food and everything in between.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
