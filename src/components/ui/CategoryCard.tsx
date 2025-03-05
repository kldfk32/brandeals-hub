
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, count, slug }) => {
  return (
    <Link 
      to={`/category/${slug}`}
      className="group block"
    >
      <div className="glass-card rounded-2xl p-1 overflow-hidden transition-all duration-300 hover:shadow-card">
        <div className="aspect-square rounded-xl overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end p-6 text-center">
            <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{count} pasiūlymai</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

