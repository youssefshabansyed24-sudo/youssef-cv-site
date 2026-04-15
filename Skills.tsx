import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
  { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-500' },
  { name: 'React', level: 88, color: 'from-cyan-400 to-blue-600' },
  { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-700' },
  { name: 'Firebase', level: 82, color: 'from-yellow-500 to-orange-600' },
  { name: 'Git & GitHub', level: 85, color: 'from-gray-600 to-black' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="lg:col-span-5 lg:row-span-5 glass p-8 rounded-[20px]">
      <div className="flex justify-between items-center mb-6 text-[0.8rem] uppercase tracking-[2px] text-text-primary/40">
        <span>My Tech Stack</span>
        <span>Expert</span>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="flex justify-between text-[0.85rem] mb-1.5">
              <span>{skill.name}</span>
              <span className="opacity-50">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary-accent to-secondary-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
