/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Plus, Info, ChevronDown } from 'lucide-react';
import { Movie } from '../../types';
import { cn } from '../../lib/utils';

interface MovieCardProps {
  movie: Movie;
  key?: string | number;
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-none w-[160px] md:w-[240px] aspect-[16/9] md:aspect-[16/9] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.thumbnailUrl}
        alt={movie.title}
        className="w-full h-full object-cover rounded-md transition-all duration-300 group-hover:opacity-0"
        referrerPolicy="no-referrer"
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: -20 }}
            animate={{ scale: 1.25, opacity: 1, y: -50 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full z-20 bg-[#1a1a1a] rounded-lg shadow-2xl shadow-black overflow-hidden border border-white/5"
          >
            <div className="relative aspect-[16/9]">
              <video
                src={movie.videoUrl}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              <div className="absolute top-2 right-2">
                <div className="bg-black/50 backdrop-blur-sm p-1 rounded-full text-[10px] font-bold border border-white/20">
                  {movie.rating}
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Play size={16} fill="currentColor" />
                  </button>
                  <button className="w-8 h-8 rounded-full border-2 border-gray-400 text-white flex items-center justify-center hover:border-white transition-colors">
                    <Plus size={16} />
                  </button>
                </div>
                <button className="w-8 h-8 rounded-full border-2 border-gray-400 text-white flex items-center justify-center hover:border-white transition-colors">
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="text-green-500 font-bold">98% Match</span>
                  <span className="text-white/60">{movie.year}</span>
                  <span className="text-white/60 border border-white/20 px-1 rounded">{movie.duration}</span>
                </div>
                <h3 className="text-sm font-bold truncate">{movie.title}</h3>
                <p className="text-[10px] text-white/70 line-clamp-2">{movie.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
