
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PromoCard from "@/components/ui/PromoCard";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sample category data
const categories = {
  sport: {
    title: "Sport & Fitness",
    description: "Save on athletic gear, gym memberships, fitness equipment, and more.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    count: 42,
  },
  food: {
    title: "Food & Dining",
    description: "Discover deals for restaurants, food delivery, groceries, and more.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    count: 56,
  },
  clothing: {
    title: "Clothing & Fashion",
    description: "Find discounts on apparel, accessories, footwear, and more.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    count: 78,
  },
  health: {
    title: "Health & Wellness",
    description: "Save on vitamins, supplements, personal care, and more.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
    count: 35,
  },
};

// Sample deals data based on category
const categoryDeals = {
  sport: [
    {
      id: "s1",
      title: "25% Off Athletic Shoes",
      brand: "Nike",
      code: "NIKE25",
      expiryDate: "2023-12-31",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "Sport",
    },
    {
      id: "s2",
      title: "15% Off Sitewide",
      brand: "Adidas",
      code: "ADIDAS15",
      expiryDate: "2023-12-15",
      discount: "15% OFF",
      image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      category: "Sport",
    },
    {
      id: "s3",
      title: "Buy One Get One 50% Off",
      brand: "Under Armour",
      code: "UABOGO",
      expiryDate: "2023-11-30",
      discount: "BOGO 50%",
      image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4",
      category: "Sport",
    },
    {
      id: "s4",
      title: "30% Off First Month",
      brand: "Planet Fitness",
      code: "FIT30",
      expiryDate: "2023-12-01",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      category: "Sport",
    },
    {
      id: "s5",
      title: "$20 Off Orders Over $100",
      brand: "Dick's Sporting Goods",
      code: "DICKS20",
      expiryDate: "2023-11-20",
      discount: "$20 OFF",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      category: "Sport",
    },
    {
      id: "s6",
      title: "Free Shipping on All Orders",
      brand: "Puma",
      code: "PUMAFREE",
      expiryDate: "2023-12-10",
      discount: "FREE SHIPPING",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      category: "Sport",
    },
  ],
  food: [
    {
      id: "f1",
      title: "Buy One Get One Free",
      brand: "Subway",
      code: "SUBWAYB1G1",
      expiryDate: "2023-11-15",
      discount: "BOGO",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
      category: "Food",
    },
    {
      id: "f2",
      title: "50% Off First Order",
      brand: "DoorDash",
      code: "DASH50",
      expiryDate: "2023-11-20",
      discount: "50% OFF",
      image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9",
      category: "Food",
    },
    {
      id: "f3",
      title: "$10 Off Orders Over $50",
      brand: "Uber Eats",
      code: "EATS10",
      expiryDate: "2023-12-05",
      discount: "$10 OFF",
      image: "https://images.unsplash.com/photo-1515665487545-1a7f96cd60b1",
      category: "Food",
    },
    {
      id: "f4",
      title: "Free Delivery All Weekend",
      brand: "Grubhub",
      code: "GRUBFREE",
      expiryDate: "2023-11-30",
      discount: "FREE DELIVERY",
      image: "https://images.unsplash.com/photo-1576271901473-76f937219150",
      category: "Food",
    },
    {
      id: "f5",
      title: "20% Off Your First 3 Orders",
      brand: "Instacart",
      code: "INSTA20",
      expiryDate: "2023-12-31",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58",
      category: "Food",
    },
    {
      id: "f6",
      title: "Free Appetizer with Entree Purchase",
      brand: "Applebee's",
      code: "APPFREE",
      expiryDate: "2023-12-15",
      discount: "FREE APPETIZER",
      image: "https://images.unsplash.com/photo-1544025162-5d994a8536c8",
      category: "Food",
    },
  ],
  clothing: [
    {
      id: "c1",
      title: "Free Shipping on $50+",
      brand: "H&M",
      code: "HMSHIP",
      expiryDate: "2023-10-30",
      discount: "FREE SHIPPING",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
      category: "Clothing",
    },
    {
      id: "c2",
      title: "Buy 2 Get 1 Free",
      brand: "Gap",
      code: "GAP2GET1",
      expiryDate: "2023-11-30",
      discount: "B2G1",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
      category: "Clothing",
    },
    {
      id: "c3",
      title: "30% Off Sitewide",
      brand: "Zara",
      code: "ZARA30",
      expiryDate: "2023-12-20",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
      category: "Clothing",
    },
    {
      id: "c4",
      title: "40% Off Jeans",
      brand: "Levi's",
      code: "LEVIS40",
      expiryDate: "2023-11-25",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
      category: "Clothing",
    },
    {
      id: "c5",
      title: "$25 Off Orders Over $100",
      brand: "Old Navy",
      code: "NAVY25",
      expiryDate: "2023-12-10",
      discount: "$25 OFF",
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e",
      category: "Clothing",
    },
    {
      id: "c6",
      title: "15% Off First Purchase",
      brand: "ASOS",
      code: "ASOS15",
      expiryDate: "2023-12-31",
      discount: "15% OFF",
      image: "https://images.unsplash.com/photo-1560243563-062bfc001d68",
      category: "Clothing",
    },
  ],
  health: [
    {
      id: "h1",
      title: "$20 Off Your First Vitamin Order",
      brand: "Ritual",
      code: "RITUAL20",
      expiryDate: "2023-12-31",
      discount: "$20 OFF",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
      category: "Health",
    },
    {
      id: "h2",
      title: "25% Off Skincare Products",
      brand: "Sephora",
      code: "SKIN25",
      expiryDate: "2023-11-30",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      category: "Health",
    },
    {
      id: "h3",
      title: "Buy 2 Get 1 Free Supplements",
      brand: "GNC",
      code: "GNC2GET1",
      expiryDate: "2023-12-15",
      discount: "B2G1",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
      category: "Health",
    },
    {
      id: "h4",
      title: "Free Shipping on All Orders",
      brand: "iHerb",
      code: "HERBSHIP",
      expiryDate: "2023-12-05",
      discount: "FREE SHIPPING",
      image: "https://images.unsplash.com/photo-1493925410384-84f842e616fb",
      category: "Health",
    },
    {
      id: "h5",
      title: "30% Off First Box",
      brand: "Care/of",
      code: "CARE30",
      expiryDate: "2023-11-25",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85",
      category: "Health",
    },
    {
      id: "h6",
      title: "20% Off Fitness Trackers",
      brand: "Fitbit",
      code: "FIT20",
      expiryDate: "2023-12-20",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288",
      category: "Health",
    },
  ],
};

const Category = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [activeSort, setActiveSort] = React.useState("newest");
  
  const categoryData = categorySlug && categories[categorySlug as keyof typeof categories];
  const deals = categorySlug && categoryDeals[categorySlug as keyof typeof categoryDeals];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!categoryData || !deals) {
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
              <p className="text-muted-foreground mb-2">{categoryData.description}</p>
              <div className="flex items-center text-sm">
                <span className="font-medium text-primary">{categoryData.count} deals available</span>
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
                <h2 className="text-2xl font-bold">All {categoryData.title} Deals</h2>
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
