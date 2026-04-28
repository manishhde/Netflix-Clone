/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

interface NavbarProps {
  onSearch: (query: string) => void;
  selectedProfile: { name: string; avatarUrl: string } | null;
  onSignOut: () => void;
}

export function Navbar({ onSearch, selectedProfile, onSignOut }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 px-12 py-4 flex items-center justify-between',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-gradient-to-b from-black/80 to-transparent'
      )}
    >
      <div className="flex items-center gap-10">
        <h1 className="text-brand-red text-3xl font-black tracking-tighter uppercase">
          Lumina
        </h1>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="hover:text-white transition-colors">TV Shows</a>
          <a href="#" className="hover:text-white transition-colors">Movies</a>
          <a href="#" className="hover:text-white transition-colors">New & Popular</a>
          <a href="#" className="hover:text-white transition-colors">My List</a>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative flex items-center">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="bg-black/40 border border-white/20 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:border-brand-red hidden md:block"
                placeholder="Titles, people, genres..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearch(e.target.value);
                }}
                autoFocus
              />
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1 hover:text-gray-400 transition-colors"
          >
            <Search size={22} />
          </button>
        </div>

        <button className="hidden md:block p-1 hover:text-gray-400 transition-colors">
          <Bell size={22} />
        </button>

        {selectedProfile ? (
          <div className="relative">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onMouseEnter={() => setIsProfileMenuOpen(true)}
              onMouseLeave={() => setIsProfileMenuOpen(false)}
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <img
                src={selectedProfile.avatarUrl}
                alt="Profile"
                className="w-8 h-8 rounded-md hover:ring-2 hover:ring-white transition-all"
                referrerPolicy="no-referrer"
              />
              
              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded overflow-hidden shadow-2xl"
                  >
                    <div className="p-3 border-b border-white/10 flex items-center gap-3">
                       <img
                        src={selectedProfile.avatarUrl}
                        alt="Profile"
                        className="w-8 h-8 rounded"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-sm font-medium">{selectedProfile.name}</span>
                    </div>
                    <button 
                      onClick={onSignOut}
                      className="w-full text-left p-3 text-sm hover:bg-white/10 transition-colors"
                    >
                      Sign Out of Lumina
                    </button>
                    <button 
                      onClick={onSignOut}
                      className="w-full text-left p-3 text-sm hover:bg-white/10 transition-colors border-t border-white/10"
                    >
                      Switch Profile
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <button className="bg-brand-red px-4 py-1.5 rounded text-sm font-semibold hover:bg-brand-red/90 transition-colors">
            Sign In
          </button>
        )}

        <button
          className="md:hidden p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            <a href="#" className="hover:text-brand-red transition-colors">Home</a>
            <a href="#" className="hover:text-brand-red transition-colors">TV Shows</a>
            <a href="#" className="hover:text-brand-red transition-colors">Movies</a>
            <a href="#" className="hover:text-brand-red transition-colors">My List</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
