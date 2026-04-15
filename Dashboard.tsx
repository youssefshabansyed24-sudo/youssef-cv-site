import React from 'react';
import { motion } from 'motion/react';
import { useAuth } from './AuthContext';
import { LayoutDashboard, Mail, Calendar, ShieldCheck, LogIn } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, signIn } = useAuth();

  return (
    <section id="dashboard" className="glass p-8 rounded-[20px]">
      <div className="flex justify-between items-center mb-6 text-[0.8rem] uppercase tracking-[2px] text-text-primary/40">
        <span>User Dashboard</span>
        <span>Status: {user ? 'Online' : 'Offline'}</span>
      </div>

      {!user ? (
        <div className="text-center py-12">
          <ShieldCheck size={48} className="text-primary-accent mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-bold mb-2">Protected Area</h3>
          <p className="text-sm text-text-primary/60 mb-6 max-w-sm mx-auto">
            Please sign in with your Google account to access your personalized dashboard.
          </p>
          <button 
            onClick={signIn}
            className="px-6 py-3 bg-primary-accent rounded-xl font-bold text-sm text-white glow-primary transition-all"
          >
            Sign In with Google
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-border-subtle">
            <img 
              src={user.photoURL || ''} 
              alt="" 
              className="w-24 h-24 rounded-full border-4 border-primary-accent/20 mb-4"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-lg font-bold">{user.displayName}</h3>
            <p className="text-xs text-text-primary/40 truncate w-full">{user.email}</p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-border-subtle relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-1 relative z-10">Welcome back, <span className="text-primary-accent">{user.displayName?.split(' ')[0]}</span>!</h3>
              <p className="text-sm text-text-primary/60 relative z-10">Your profile is securely stored in our Firestore database.</p>
              <LayoutDashboard className="absolute -right-8 -bottom-8 w-32 h-32 text-white/5 -rotate-12" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-border-subtle">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-primary/40 mb-1">Joined</p>
                <p className="text-sm font-medium">{new Date(user.metadata.creationTime || '').toLocaleDateString()}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-border-subtle">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-primary/40 mb-1">Last Login</p>
                <p className="text-sm font-medium">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
