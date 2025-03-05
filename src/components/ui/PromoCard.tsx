
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Heart, Share } from "lucide-react";
import { toast } from "sonner";

interface PromoCardProps {
  id: string;
  title: string;
  brand: string;
  code: string;
  expiryDate: string;
  discount: string;
  image: string;
  category: string;
  featured?: boolean;
}

const PromoCard: React.FC<PromoCardProps> = ({
  id,
  title,
  brand,
  code,
  expiryDate,
  discount,
  image,
  category,
  featured = false,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const handleCopyCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    toast.success("Akcijos kodas nukopijuotas į iškarpinę!");
  };
  
  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Pašalinta iš išsaugotų pasiūlymų" : "Pridėta prie išsaugotų pasiūlymų");
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Share functionality would go here
    toast.success("Dalijimosi dialogas atidarytas");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('lt-LT', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  return (
    <Link to={`/deal/${id}`} className="block group h-full">
      <div 
        className={`glass-card group rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-card ${
          featured ? 'shadow-card' : 'shadow-subtle'
        }`}
      >
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden bg-secondary">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                Rekomenduojama
              </span>
            </div>
          )}
          
          <div className="absolute top-3 right-3">
            <span className="bg-black/70 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
          
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
            <div className="bg-primary text-white text-lg font-semibold px-4 py-2.5 rounded-lg shadow-sm">
              {discount}
            </div>
          </div>
        </div>
        
        <div className="p-6 pt-9">
          <div className="mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">{brand}</h3>
            <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
          </div>
          
          <div className="flex items-center justify-between mt-4 mb-2">
            <div className="text-sm text-muted-foreground">
              Galioja iki: {formatDate(expiryDate)}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handleCopyCode}
              className="bg-secondary hover:bg-primary/10 text-foreground px-4 py-2.5 rounded-lg flex items-center transition-colors"
            >
              <span className="font-mono font-medium mr-2">{code}</span>
              <Copy size={16} />
            </button>
            
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className={`p-2 rounded-full ${
                  isSaved ? 'bg-primary/10 text-primary' : 'bg-secondary text-foreground hover:bg-primary/10'
                } transition-colors`}
                aria-label={isSaved ? "Pašalinti iš išsaugotų" : "Išsaugoti pasiūlymą"}
              >
                <Heart size={18} className={isSaved ? "fill-primary" : ""} />
              </button>
              
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary/10 transition-colors"
                aria-label="Dalintis pasiūlymu"
              >
                <Share size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PromoCard;

