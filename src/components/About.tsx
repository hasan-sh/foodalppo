"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-orange-700 to-amber-600 flex items-center justify-center">
              <motion.div 
                className="text-amber-50 font-bold text-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    '0 0 0px rgba(0,0,0,0)',
                    '0 0 10px rgba(255,255,255,0.5)',
                    '0 0 0px rgba(0,0,0,0)'
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              >
                Foodalppo
              </motion.div>
              
              {/* Floating spice elements */}
              {[...Array(8)].map((_, i) => {
                // Use deterministic values based on index
                const top = (i * 12) % 100;
                const left = ((i * 15) + 5) % 100;
                const xOffset = (i % 5) * 2;
                const duration = 3 + (i % 3);
                const delay = (i % 4) * 0.5;
                
                return (
                  <motion.div 
                    key={i}
                    className="absolute rounded-full bg-amber-200 w-4 h-4"
                    style={{
                      top: `${top}%`,
                      left: `${left}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, xOffset, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: delay
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-orange-800 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Over ons
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Mijn naam is Hasan en ik kom uit Aleppo, Syrië. De keuken van mijn thuisland zit vol met rijke smaken, kruiden en tradities die generaties lang zijn doorgegeven.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Na mijn komst naar Nederland wilde ik de authentieke smaken van Aleppo delen met mijn nieuwe gemeenschap. Zo ontstond Foodalppo - een foodtruck waar ik met liefde en passie Syrische streetfood bereid volgens authentieke recepten uit de traditionele keuken van Aleppo.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="font-semibold text-orange-700"
                whileInView={{
                  textShadow: [
                    '0 0 0px rgba(0,0,0,0)',
                    '0 0 2px rgba(234,88,12,0.5)',
                    '0 0 0px rgba(0,0,0,0)'
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: 3,
                  repeatType: "loop" 
                }}
                viewport={{ once: true }}
              >
                Alle gerechten worden bereid met recepten die rechtstreeks van mijn moeder komen!
              </motion.span> Haar kookkunsten en geheime familiekruiden maken onze gerechten uniek en onvergetelijk.
            </motion.p>
            
            <motion.p 
              className="text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Elk gerecht wordt gemaakt met deze traditionele recepten en verse ingrediënten. Van knapperige falafel tot sappige BBQ-spiesen en zoete ma'amoul koekjes - bij Foodalppo proef je de echte, authentieke smaken van een Aleppo familiekeuken.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
