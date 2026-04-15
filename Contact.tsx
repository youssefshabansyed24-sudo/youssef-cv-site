import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="lg:col-span-4 lg:row-span-5 glass p-8 rounded-[20px] flex flex-col">
      <div className="text-[0.8rem] uppercase tracking-[2px] text-text-primary/40 mb-6">
        Get in Touch
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 flex-1">
        <input 
          required
          type="text" 
          placeholder="Full Name"
          className="w-full bg-white/5 border border-border-subtle rounded-lg p-3 text-sm text-white focus:outline-none focus:border-primary-accent/50 transition-all"
        />
        <input 
          required
          type="email" 
          placeholder="Email Address"
          className="w-full bg-white/5 border border-border-subtle rounded-lg p-3 text-sm text-white focus:outline-none focus:border-primary-accent/50 transition-all"
        />
        <textarea 
          required
          placeholder="Project details..."
          className="w-full bg-white/5 border border-border-subtle rounded-lg p-3 text-sm text-white focus:outline-none focus:border-primary-accent/50 transition-all h-20 resize-none"
        />
        <button 
          type="submit"
          className="w-full py-3 bg-primary-accent rounded-xl font-bold text-sm text-white glow-primary transition-all"
        >
          Send Message
        </button>
      </form>

      <div className="mt-auto pt-6 text-[0.75rem] text-center opacity-50">
        © 2025 Youssef • Built with passion and code
      </div>
    </section>
  );
};
