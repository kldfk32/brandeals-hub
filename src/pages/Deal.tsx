
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DealDetail from "@/components/ui/DealDetail";
import PromoCard from "@/components/ui/PromoCard";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sample all deals data 
// This would normally come from an API
const allDeals = [
  {
    id: "1",
    title: "25% Off Athletic Shoes",
    brand: "Nike",
    code: "NIKE25",
    expiryDate: "2023-12-31",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sport",
    featured: true,
    description: "Save 25% on all athletic footwear in-store and online at Nike. Perfect time to upgrade your workout gear.",
    influencer: {
      name: "FitnessPro",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    terms: [
      "Valid until December 31, 2023",
      "Cannot be combined with other offers or promotions",
      "Valid on regular-priced items only",
      "Excludes limited edition and collaborations",
      "One code per customer",
      "Valid in the United States only",
    ],
  },
  {
    id: "2",
    title: "Buy One Get One Free",
    brand: "Subway",
    code: "SUBWAYB1G1",
    expiryDate: "2023-11-15",
    discount: "BOGO",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
    category: "Food",
    featured: true,
    description: "Buy any footlong sub and get one of equal or lesser value free. Valid at participating Subway restaurants.",
    influencer: {
      name: "FoodieFinds",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    terms: [
      "Valid until November 15, 2023",
      "Available at participating locations only",
      "Must mention coupon when ordering",
      "Second sandwich must be of equal or lesser value",
      "Not valid with any other discount or promotion",
      "Valid for in-store or app orders only, excludes delivery",
    ],
  },
  {
    id: "3",
    title: "Free Shipping on $50+",
    brand: "H&M",
    code: "HMSHIP",
    expiryDate: "2023-10-30",
    discount: "FREE SHIPPING",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    category: "Clothing",
    featured: true,
    description: "Get free standard shipping on all orders of $50 or more. Shop the latest fashion trends and save on delivery.",
    terms: [
      "Valid until October 30, 2023",
      "Minimum purchase of $50 required, before taxes and after discounts",
      "Valid for standard shipping only",
      "Express and expedited shipping excluded",
      "Valid for shipments within the continental United States only",
      "Cannot be applied to previous purchases",
    ],
  },
  {
    id: "4",
    title: "30% Off First Month",
    brand: "Planet Fitness",
    code: "FIT30",
    expiryDate: "2023-12-01",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    category: "Health",
    featured: true,
    description: "Join Planet Fitness and save 30% on your first month with any Black Card membership. Access to all amenities included.",
    influencer: {
      name: "GymGuru",
      image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e",
    },
    terms: [
      "Valid until December 1, 2023",
      "New members only",
      "Valid for Black Card memberships only",
      "Annual fee still applies",
      "Must be 18 years or older with valid ID",
      "Participating locations only",
    ],
  },
  // More deals would be here in a real implementation
];

// Get similar deals function
const getSimilarDeals = (currentDealId: string, category: string) => {
  return allDeals
    .filter(deal => deal.id !== currentDealId && deal.category === category)
    .slice(0, 4);
};

const Deal = () => {
  const { dealId } = useParams<{ dealId: string }>();
  const deal = allDeals.find(d => d.id === dealId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dealId]);

  if (!deal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Deal not found</h1>
          <p className="text-muted-foreground mb-6">
            The deal you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  const similarDeals = getSimilarDeals(dealId as string, deal.category);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <span className="mx-2 text-muted-foreground">/</span>
            <a href={`/category/${deal.category.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">{deal.category}</a>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="font-medium">{deal.title}</span>
          </div>
          
          {/* Deal Detail Section */}
          <DealDetail {...deal} />
          
          {/* Similar Deals Section */}
          {similarDeals.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-bold mb-8">Similar Deals You Might Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
