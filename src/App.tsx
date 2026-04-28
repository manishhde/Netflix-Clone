/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { MovieRow } from './components/home/MovieRow';
import { Footer } from './components/layout/Footer';
import { ProfileSelection } from './components/profile/ProfileSelection';
import { MOVIES, PROFILES, CATEGORIES } from './data';
import { UserProfile, Movie } from './types';

export default function App() {
  const [profiles, setProfiles] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem('lumina_profiles');
    return saved ? JSON.parse(saved) : PROFILES;
  });
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist profiles
  useMemo(() => {
    localStorage.setItem('lumina_profiles', JSON.stringify(profiles));
  }, [profiles]);

  const handleAddProfile = () => {
    const name = window.prompt('Enter profile name:');
    if (name === null) return; // User clicked cancel
    
    const profileName = name.trim() || `Profile ${profiles.length + 1}`;
    
    const newProfile: UserProfile = {
      id: Math.random().toString(36).substr(2, 9),
      name: profileName,
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${profileName}_${Date.now()}`
    };
    setProfiles(prev => [...prev, newProfile]);
  };

  const handleDeleteProfile = (id: string) => {
    if (profiles.length <= 1) {
      alert('You must have at least one profile.');
      return;
    }
    if (window.confirm('Delete this profile? All history will be lost.')) {
      setProfiles(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleEditProfile = (id: string) => {
    const profile = profiles.find(p => p.id === id);
    if (!profile) return;

    const newName = window.prompt('Enter new profile name:', profile.name);
    if (newName === null) return; // Cancel
    
    const finalName = newName.trim();
    if (!finalName) return;

    setProfiles(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          name: finalName,
          // Only update avatar if name changed significantly or keep it? 
          // Let's keep it but allow updating the name.
        };
      }
      return p;
    }));
  };

  const handleSignOut = () => {
    setSelectedProfile(null);
    setSearchQuery('');
  };

  // Main movie for the hero
  const featuredMovie = MOVIES[0];

  // Filtered movies based on search
  const filteredMovies = useMemo(() => {
    if (!searchQuery) return MOVIES;
    return MOVIES.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Shuffle movies for different rows (simplified)
  const getRandomMovies = (count: number) => {
    return [...MOVIES].sort(() => Math.random() - 0.5).slice(0, count);
  };

  const handleProfileSelect = (profile: UserProfile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="min-h-screen bg-bg-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="glow-red" />
      <div className="glow-blue" />

      <AnimatePresence mode="wait">
        {!selectedProfile ? (
          <motion.div
            key="profile-selection"
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <ProfileSelection
              profiles={profiles}
              onSelect={handleProfileSelect}
              onAddProfile={handleAddProfile}
              onDeleteProfile={handleDeleteProfile}
              onEditProfile={handleEditProfile}
            />
          </motion.div>
        ) : (
          <motion.div
            key="browse-content"
            className="relative z-10 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar
              onSearch={setSearchQuery}
              selectedProfile={selectedProfile}
              onSignOut={handleSignOut}
            />

            <main className="flex-grow">
              {!searchQuery ? (
                <>
                  <Hero movie={featuredMovie} />
                  
                  <div className="-mt-16 md:-mt-32 relative z-10 space-y-0 pb-12">
                    <MovieRow
                      title={`Continue Watching for ${selectedProfile.name}`}
                      movies={MOVIES.slice(1, 4)}
                    />
                    <MovieRow
                      title="Trending Now"
                      movies={getRandomMovies(6)}
                    />
                    <MovieRow
                      title="New Releases"
                      movies={getRandomMovies(5)}
                    />
                    <MovieRow
                      title="Action Highlights"
                      movies={MOVIES.filter(m => m.genre === 'Action' || m.genre === 'Sci-Fi')}
                    />
                    <MovieRow
                      title="Top Picks for You"
                      movies={getRandomMovies(6)}
                    />
                  </div>
                </>
              ) : (
                <div className="pt-24 md:pt-32 px-4 md:px-12 min-h-[60vh] space-y-8">
                  <h2 className="text-2xl font-bold text-gray-400 capitalize">
                    Search Results for: <span className="text-white">"{searchQuery}"</span>
                  </h2>
                  
                  {filteredMovies.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-4">
                      {filteredMovies.map((movie) => (
                        <div key={movie.id} className="w-full aspect-[16/9] relative group cursor-pointer bg-bg-card rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                          <img
                            src={movie.thumbnailUrl}
                            alt={movie.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-sm font-bold truncate">{movie.title}</p>
                            <p className="text-[10px] text-gray-400">{movie.year} • {movie.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                      <p className="text-xl text-gray-400">Your search for "{searchQuery}" did not find any matches.</p>
                    </div>
                  )}
                </div>
              )}
            </main>

            <Footer />

            {/* Status Indicator */}
            <div className="fixed bottom-6 right-6 hidden md:flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full z-50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Lumina AI Stream Active</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
