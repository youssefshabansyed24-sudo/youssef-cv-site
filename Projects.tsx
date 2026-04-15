import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured online store with real-time inventory and secure payments.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live: '#',
    github: '#'
  },
  {
    title: 'AI Content Generator',
    desc: 'Leveraging LLMs to generate high-quality marketing copy and images.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tech: ['Next.js', 'OpenAI', 'Tailwind', 'Prisma'],
    live: '#',
    github: '#'
  },
  {
    title: 'Crypto Dashboard',
    desc: 'Real-time cryptocurrency tracking with advanced charting and alerts.',
    image: 'https://picsum.photos/seed/crypto/800/600',
    tech: ['React', 'D3.js', 'Firebase', 'CoinGecko API'],
    live: '#',
    github: '#'
  },
  {
    title: 'Social Media App',
    desc: 'A modern social platform with real-time chat and media sharing.',
    image: 'https://picsum.photos/seed/social/800/600',
    tech: ['React Native', 'Firebase', 'Cloudinary'],
    live: '#',
    github: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="lg:col-span-8 lg:row-span-5 glass p-8 rounded-[20px]">
      <div className="flex justify-between items-center mb-6 text-[0.8rem] uppercase tracking-[2px] text-text-primary/40">
        <span>Recent Works</span>
        <span>(2024-2025)</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 h-full">
        {projects.slice(0, 2).map((project) => (
          <div key={project.title} className="bg-white/5 border border-border-subtle rounded-2xl p-4 flex flex-col gap-2">
            <div className="h-24 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg mb-1" />
            <span className="text-[0.7rem] px-2 py-0.5 bg-primary-accent/10 text-primary-accent rounded w-fit">
              {project.tech[0]} • {project.tech[1]}
            </span>
            <h3 className="text-base font-bold">{project.title}</h3>
            <p className="text-[0.75rem] text-text-primary/50 line-clamp-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
