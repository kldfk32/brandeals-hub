
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deals } from "@/data/deals";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Copy, Calendar, Tag, Heart } from "lucide-react";
import { toast } from "sonner";
import PromoCard from "@/components/ui/PromoCard";

const Deal = () => {
  const { dealId } = useParams<{ dealId: string }>();
  const [isSaved, setIsSaved] = useState(false);
  
  const deal = deals.find(d => d.id === dealId);
  
  // Find similar deals from the same category
  const similarDeals = deal 
    ? deals.filter(d => d.category === deal.category && d.id !== deal.id).slice(0, 3)
    : [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dealId]);

  const handleCopyCode = () => {
    if (deal?.code) {
      navigator.clipboard.writeText(deal.code);
      toast.success("Akcijos kodas nukopijuotas į iškarpinę!");
    }
  };
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Pašalinta iš išsaugotų pasiūlymų" : "Pridėta prie išsaugotų pasiūlymų");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('lt-LT', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  if (!deal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Pasiūlymas nerastas</h1>
          <p className="text-muted-foreground mb-6">
            Pasiūlymas, kurio ieškote, neegzistuoja arba buvo pašalintas.
          </p>
          <Button asChild>
            <a href="/">Grįžti į pagrindinį puslapį</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Pagrindinis</a>
            <span className="mx-2 text-muted-foreground">/</span>
            <a href={`/category/${deal.category.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">{deal.category}</a>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="font-medium">{deal.title}</span>
          </div>
          
          {/* Deal Detail Section */}
          <div className="glass-card bg-white/95 rounded-2xl overflow-hidden shadow-elevated mt-8">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-2/5 relative bg-secondary">
                <div className="aspect-[4/3] lg:h-full">
                  <img 
                    src={deal.image} 
                    alt={deal.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {deal.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-3/5 p-6 md:p-10">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-muted-foreground mb-2">{deal.brand}</h3>
                  <h1 className="text-3xl md:text-4xl font-bold">{deal.title}</h1>
                </div>
                
                <div className="flex flex-wrap gap-4 my-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>
                      Galioja iki: <strong>{formatDate(deal.expiryDate)}</strong>
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Tag className="h-4 w-4 mr-2 text-primary" />
                    <span>
                      <strong>{deal.discount}</strong>
                    </span>
                  </div>
                </div>
                
                {deal.description && (
                  <div className="my-6">
                    <h3 className="text-lg font-semibold mb-3">Pasiūlymo aprašymas</h3>
                    <p className="text-muted-foreground">{deal.description}</p>
                  </div>
                )}
                
                {/* Promo Code Section */}
                <div className="bg-secondary/70 p-5 rounded-lg mt-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Akcijos kodas:</h3>
                      <div className="inline-block bg-white px-4 py-2 rounded-md font-mono font-medium text-lg">{deal.code}</div>
                    </div>
                    <div className="flex gap-3">
                      <Button onClick={handleCopyCode} className="flex items-center gap-2">
                        <Copy size={16} />
                        <span>Kopijuoti kodą</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleSave} 
                        className={`flex items-center gap-2 ${isSaved ? 'bg-primary/10 text-primary border-primary' : ''}`}
                      >
                        <Heart size={16} className={isSaved ? "fill-primary" : ""} />
                        <span>{isSaved ? "Išsaugota" : "Išsaugoti"}</span>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Terms Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Naudojimosi sąlygos</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Pasiūlymas galioja iki {formatDate(deal.expiryDate)}</li>
                    <li>Negalima derinti su kitomis akcijomis ar nuolaidomis</li>
                    <li>Galioja tik originalios kainos prekėms</li>
                    <li>Prekių kiekis ribotas</li>
                    <li>Vienas kodas vienam užsakymui</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar Deals Section */}
          {similarDeals.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Panašūs pasiūlymai, kurie jums gali patikti</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarDeals.map((similarDeal) => (
                  <div key={similarDeal.id} className="animate-fade-in">
                    <PromoCard {...similarDeal} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Deal;
