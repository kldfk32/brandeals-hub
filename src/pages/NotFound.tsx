
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Klaida: Vartotojas bandė pasiekti neegzistuojantį maršrutą:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Oi! Puslapis nerastas</h2>
            <p className="text-muted-foreground mb-8">
              Atsiprašome, bet puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="button-primary inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} />
                Grįžti į pagrindinį puslapį
              </Link>
              <Link 
                to="/all-deals" 
                className="button-outline"
              >
                Peržiūrėti visus pasiūlymus
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
