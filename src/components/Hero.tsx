"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-amber-800/80 z-10">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => {
            // Use deterministic values based on index instead of random
            const top = (i * 5) % 100;
            const left = ((i * 7) + 3) % 100;
            const size = 10 + ((i * 3) % 40);
            const opacityVal = 0.2 + ((i * 0.1) % 0.3);
            const duration = 10 + ((i * 2) % 10);
            
            return (
              <div 
                key={i}
                className="absolute rounded-full bg-amber-200" 
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacityVal,
                  animation: `float ${duration}s linear infinite`
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 bg-orange-800 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-amber-50 mb-4"
        >
          Foodalppo
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-amber-50 mb-8"
        >
          Syrisch streetfood met liefde uit Aleppo
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          onClick={() => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Ontdek ons menu
        </motion.button>
      </div>
    </div>
  );
}
