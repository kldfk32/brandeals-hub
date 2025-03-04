
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
      className="group flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
    >
      <div className="h-12 w-12 rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-medium group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-xs text-muted-foreground">{count} deals</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
