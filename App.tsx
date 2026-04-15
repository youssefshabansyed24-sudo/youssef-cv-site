/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AuthProvider } from './components/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Atmosphere } from './components/Atmosphere';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Dashboard } from './components/Dashboard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="relative min-h-screen selection:bg-primary-accent/30">
          <Atmosphere />
          <Navbar />
          
          <main className="max-w-7xl mx-auto px-10 pt-32 pb-20">
            <div className="lg:bento-grid flex flex-col gap-4">
              <Hero />
              <Skills />
              <Projects />
              <Contact />
              <div className="lg:col-span-12">
                <Dashboard />
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

