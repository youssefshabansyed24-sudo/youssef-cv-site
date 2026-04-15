import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from './AuthContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signIn, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-2xl font-extrabold tracking-tighter text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          Youssef.dev
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-text-primary/70 hover:text-text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {user ? (
            <div className="flex items-center gap-3 glass px-4 py-1.5 rounded-full">
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full border-2 border-secondary-accent" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center">
                    <UserIcon size={16} className="text-white" />
                  </div>
                )}
                <span className="text-sm font-semibold">{user.displayName?.split(' ')[0]}</span>
              </div>
              <div className="w-[1px] h-4 bg-border-subtle mx-1" />
              <button 
                onClick={logout}
                className="text-xs font-medium text-secondary-accent hover:text-primary-accent transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={signIn}
              className="px-6 py-2 bg-primary-accent rounded-xl text-sm font-bold text-white glow-primary hover:scale-105 transition-all"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-text-primary/70"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                {user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={user.photoURL || ''} alt="" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                      <span className="font-medium">{user.displayName}</span>
                    </div>
                    <button onClick={logout} className="p-2 text-red-400"><LogOut /></button>
                  </div>
                ) : (
                  <button 
                    onClick={() => { signIn(); setIsOpen(false); }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary-accent rounded-xl font-semibold"
                  >
                    <LogIn size={18} />
                    Sign In with Google
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
