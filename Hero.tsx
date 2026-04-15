import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="lg:col-span-7 lg:row-span-5 glass p-10 flex flex-col justify-center rounded-[20px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-lg font-semibold text-primary-accent mb-4 block uppercase tracking-wider">Full Stack Web Developer</span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4">
          Youssef
        </h1>
        
        <p className="text-base text-text-primary/60 max-w-lg mb-8 leading-relaxed">
          Passionate developer building modern, scalable web applications using cutting-edge technologies. Expert in React, Node.js, and Cloud infrastructures.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-primary-accent rounded-xl font-bold text-sm text-white glow-primary transition-all"
          >
            View Projects
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 glass rounded-xl font-bold text-sm hover:bg-white/5 transition-all"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
