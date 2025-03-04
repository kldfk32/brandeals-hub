
import React, { useState } from "react";
import { Copy, Heart, Share, Calendar, Info } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface DealDetailProps {
  title: string;
  brand: string;
  code: string;
  description: string;
  expiryDate: string;
  discount: string;
  image: string;
  category: string;
  influencer?: {
    name: string;
    image: string;
  };
  terms: string[];
}

const DealDetail: React.FC<DealDetailProps> = ({
  title,
  brand,
  code,
  description,
  expiryDate,
  discount,
  image,
  category,
  influencer,
  terms,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast.success("Promo code copied to clipboard!");
  };
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Removed from saved deals" : "Added to saved deals");
  };
  
  const handleShare = () => {
    // Share functionality would go here
    toast.success("Share dialog opened");
  };
  
  const handleVisitStore = () => {
    // Redirect to store would go here
    toast.success("Redirecting to store...");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  };

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="glass-card rounded-2xl p-2 overflow-hidden shadow-card">
          <div className="relative rounded-xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-4 right-4">
              <span className="bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full">
                {category}
              </span>
            </div>
            
            <div className="absolute bottom-4 left-4">
              <div className="bg-primary text-white text-lg font-semibold px-4 py-2.5 rounded-lg shadow-sm">
                {discount}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                {brand}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar size={16} />
            <span>Expires on {formatDate(expiryDate)}</span>
          </div>
          
          {influencer && (
            <div className="flex items-center space-x-3">
              <img 
                src={influencer.image} 
                alt={influencer.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <p className="text-sm font-medium">Shared by</p>
                <p className="text-primary font-semibold">{influencer.name}</p>
              </div>
            </div>
          )}
          
          <div className="glass-card rounded-xl p-6 border border-primary/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Promo Code</p>
                <p className="font-mono text-xl font-semibold">{code}</p>
              </div>
              <div className="flex space-x-3">
                <Button onClick={handleCopyCode} variant="outline" className="flex-1 sm:flex-none">
                  <Copy size={18} className="mr-2" />
                  Copy
                </Button>
                <Button onClick={handleVisitStore} className="flex-1 sm:flex-none button-primary">
                  Visit Store
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Added 2 days ago
            </div>
            <div className="flex space-x-2">
              <Button 
                onClick={handleSave} 
                variant="outline" 
                size="icon" 
                className={isSaved ? 'text-primary border-primary/50 bg-primary/5' : ''}
              >
                <Heart size={18} className={isSaved ? "fill-primary" : ""} />
                <span className="sr-only">{isSaved ? "Remove from saved" : "Save deal"}</span>
              </Button>
              <Button onClick={handleShare} variant="outline" size="icon">
                <Share size={18} />
                <span className="sr-only">Share deal</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Terms Section */}
      <div className="mt-12">
        <div className="flex items-center space-x-2 mb-4">
          <Info size={20} className="text-primary" />
          <h3 className="text-xl font-semibold">Terms & Conditions</h3>
        </div>
        <div className="bg-secondary rounded-xl p-6">
          <ul className="space-y-2">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-muted-foreground">{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;
