import React from 'react';
import { motion } from 'motion/react';

export const Atmosphere: React.FC = () => {
  return (
    <div className="atmosphere">
      <div className="atmosphere-blob bg-primary-accent w-[400px] h-[400px] -top-[100px] -left-[100px]" />
      <div className="atmosphere-blob bg-secondary-accent w-[400px] h-[400px] -bottom-[100px] -right-[100px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
    </div>
  );
};
