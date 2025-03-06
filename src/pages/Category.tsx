
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PromoCard from "@/components/ui/PromoCard";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { categories, getCategoryDeals } from "@/data/deals";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeSort, setActiveSort] = React.useState("newest");
  
  const categoryData = categories.find(cat => cat.slug === slug);
  const deals = slug ? getCategoryDeals(slug) : [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!categoryData || deals.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <p className="text-muted-foreground mb-6">
            The category you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-24">
        {/* Category Hero */}
        <section className="relative">
          <div className="h-64 md:h-80 relative overflow-hidden">
            <img 
              src={categoryData.image} 
              alt={categoryData.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
          </div>
          
          <div className="container-custom relative -mt-20 z-10">
            <div className="glass-card bg-white/90 rounded-2xl p-8 md:p-10 shadow-elevated max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryData.title}</h1>
              <p className="text-muted-foreground mb-2">Raskite geriausias nuolaidas {categoryData.title.toLowerCase()} kategorijoje.</p>
              <div className="flex items-center text-sm">
                <span className="font-medium text-primary">{deals.length} pasiūlymai</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Deals Section */}
        <section className="py-14">
          <div className="container-custom">
            {/* Sorting Controls */}
            <div className="flex flex-col md:flex-row justify-between mb-8 items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Visi {categoryData.title} pasiūlymai</h2>
              </div>
              
              <div className="flex items-center space-x-2 bg-secondary rounded-lg p-1">
                {["newest", "popular", "expiring"].map((sort) => (
                  <button
                    key={sort}
                    onClick={() => setActiveSort(sort)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeSort === sort 
                        ? "bg-white shadow-sm text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {sort.charAt(0).toUpperCase() + sort.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Deals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {deals.map((deal) => (
                <div key={deal.id} className="animate-fade-in">
                  <PromoCard {...deal} />
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="button-outline">
                Load More Deals
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
