
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { categories } from "@/data/deals";
import { motion } from "framer-motion";

const AllCategories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-24">
        <section className="py-14">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Visos kategorijos</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Raskite geriausias nuolaidas mėgstamose kategorijose, nuo mados iki maisto ir visko tarp jų.
              </p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categories.map((category) => (
                <motion.div key={category.slug} variants={item}>
                  <Link 
                    to={`/category/${category.slug}`}
                    className="group block"
                  >
                    <div className="glass-card bg-white/90 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card">
                      <div className="aspect-video relative">
                        <img 
                          src={category.image} 
                          alt={category.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end p-6 text-center">
                          <h3 className="text-white text-xl font-semibold mb-1">{category.title}</h3>
                          <p className="text-white/80 text-sm">{category.count} pasiūlymai</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllCategories;
