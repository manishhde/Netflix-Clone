/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, Info } from 'lucide-react';
import { Movie } from '../../types';

interface HeroProps {
  movie: Movie;
}

export function Hero({ movie }: HeroProps) {
  return (
    <div className="relative h-[80vh] md:h-[95vh] w-full">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src={movie.bannerUrl}
          className="w-full h-full object-cover object-center"
          alt={movie.title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-20 md:bottom-40 left-4 md:left-12 space-y-4 md:space-y-6 max-w-2xl px-4 md:px-0 z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 bg-brand-red text-[10px] font-bold rounded uppercase tracking-wider">
              Trending
            </span>
            <span className="text-sm text-gray-300 font-medium tracking-wide italic">
              A Lumina Original Series
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase drop-shadow-2xl">
            {movie.title}
          </h1>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span className="text-green-500 font-bold">98% Match</span>
          <span>{movie.year}</span>
          <span className="border border-gray-500 px-1.5 py-0 text-[10px] rounded">{movie.rating}</span>
          <span>{movie.duration}</span>
          <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[10px] font-semibold">Ultra HD 4K</span>
        </div>

        <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg mb-8">
          {movie.description}
        </p>

        <div className="flex items-center gap-4 pt-2">
          <button className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-white/90 transition-all shadow-lg active:scale-95">
            <Play fill="currentColor" size={24} />
            Play Now
          </button>
          <button className="flex items-center gap-3 bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-md font-bold hover:bg-white/30 transition-all border border-white/10 active:scale-95 shadow-xl">
            <Info size={24} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
