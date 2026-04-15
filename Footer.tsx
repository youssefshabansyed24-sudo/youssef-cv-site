import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#home" className="text-2xl font-bold tracking-tighter text-gradient mb-2 block">YOUSSEF.</a>
          <p className="text-text-primary/40 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> and code
          </p>
        </div>

        <div className="flex gap-6">
          {[
            { icon: <Github size={20} />, href: '#' },
            { icon: <Twitter size={20} />, href: '#' },
            { icon: <Linkedin size={20} />, href: '#' },
            { icon: <Instagram size={20} />, href: '#' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ y: -5, color: '#3b82f6' }}
              className="text-text-primary/40 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-text-primary/40 text-sm">
          © 2025 Youssef. All rights reserved.
        </p>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
};
