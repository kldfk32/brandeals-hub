
import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Activity, Calendar, User, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 relative overflow-hidden flex flex-col justify-center items-center text-white">
      {/* Background image of Earth */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <img 
          src="/lovable-uploads/3b1ede8d-c02d-40d9-b308-0c1411e49563.png" 
          alt="Earth from space" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10 flex flex-col items-center">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-10"
        >
          Discover the most engaging places
        </motion.h1>
        
        {/* 3D Globe Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary/90 hover:bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 mb-16"
        >
          <Globe size={18} />
          Discover on 3D Globe
        </motion.button>
        
        {/* Search Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white rounded-full overflow-hidden flex items-center"
        >
          {/* Location */}
          <div className="flex-1 flex items-center gap-2 p-4 pl-6 border-r border-gray-200">
            <MapPin size={20} className="text-amber-500" />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm text-gray-800">Explore nearby destinations</p>
            </div>
          </div>
          
          {/* Activity */}
          <div className="flex-1 flex items-center gap-2 p-4 border-r border-gray-200">
            <Activity size={20} className="text-amber-500" />
            <div>
              <p className="text-xs text-gray-500">Activity</p>
              <p className="text-sm text-gray-800">All Activities</p>
            </div>
          </div>
          
          {/* When */}
          <div className="flex-1 flex items-center gap-2 p-4 border-r border-gray-200">
            <Calendar size={20} className="text-amber-500" />
            <div>
              <p className="text-xs text-gray-500">When</p>
              <p className="text-sm text-gray-800">Choose a Date</p>
            </div>
          </div>
          
          {/* Guests */}
          <div className="flex items-center gap-2 p-4 border-r border-gray-200">
            <User size={20} className="text-amber-500" />
            <div>
              <p className="text-xs text-gray-500">Guests</p>
              <p className="text-sm text-gray-800">1 guest</p>
            </div>
          </div>
          
          {/* Search Button */}
          <button className="p-5 bg-primary hover:bg-primary/90 transition-colors">
            <Search size={24} className="text-white" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
