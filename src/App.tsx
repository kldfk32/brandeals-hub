
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import Index from "./pages/Index";
import SavedDeals from "./pages/SavedDeals";
import SearchResults from "./pages/SearchResults";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import AllCategories from "./pages/AllCategories";
import Deal from "./pages/Deal";
import FAQ from "./pages/FAQ";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import AllDeals from "./pages/AllDeals";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SearchProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/saved" element={<SavedDeals />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/all-deals" element={<AllDeals />} />
            <Route path="/all-categories" element={<AllCategories />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/deal/:dealId" element={<Deal />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
