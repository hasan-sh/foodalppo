"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Falafel Wrap',
    description: 'Knapperige falafel met tahini saus en verse groenten',
    price: '€7,50',
    image: '/falafel.jpg'
  },
  {
    id: 2,
    name: 'BBQ Kipspies',
    description: 'Gemarineerde kip met kruiden en specerijen uit Aleppo',
    price: '€8,50',
    image: '/chicken.jpg'
  },
  {
    id: 3,
    name: "Ma'amoul Koekjes",
    description: 'Traditionele koekjes gevuld met dadels of pistache',
    price: '€3,50',
    image: '/maamoul.jpg'
  },
  {
    id: 4,
    name: 'Hummus Schotel',
    description: 'Romige hummus met olijfolie en pitabrood',
    price: '€6,00',
    image: '/hummus.jpg'
  }
];

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="menu" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12"
        >
          Ons Menu (Preview!)
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariant}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <motion.div 
                className="h-48 relative bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center"
                animate={{
                  background: hoveredItem === index ? 
                    'linear-gradient(to bottom right, #f97316, #d97706)' : 
                    'linear-gradient(to bottom right, #fed7aa, #fde68a)'
                }}
              >
                <motion.div 
                  className="text-orange-800 font-bold text-xl"
                  animate={{
                    scale: hoveredItem === index ? 1.1 : 1,
                    color: hoveredItem === index ? '#fff' : '#9a3412'
                  }}
                >
                  {item.name.split(' ')[0]}
                </motion.div>
              </motion.div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-orange-900">{item.name}</h3>
                  <motion.span 
                    className="font-bold text-orange-700"
                    animate={{
                      scale: hoveredItem === index ? [1, 1.1, 1] : 1
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: hoveredItem === index ? Infinity : 0,
                      repeatType: "reverse"
                    }}
                  >
                    {item.price}
                  </motion.span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
