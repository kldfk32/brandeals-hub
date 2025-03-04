
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

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const CategorySection = () => {
  return (
    <div className="h-full">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Categories</h2>
        <p className="text-muted-foreground text-sm">
          Browse deals by category
        </p>
      </div>
      
      <div className="space-y-4">
        {categories.map((category) => (
          <motion.div 
            key={category.title} 
            variants={item}
            initial="hidden"
            animate="show"
            className="w-full"
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
