/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../../types';
import { MovieCard } from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export function MovieRow({ title, movies }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4 px-12 py-8 group">
      <h2 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors flex items-center gap-2">
        {title} 
        <ChevronRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h2>

      <div className="relative">
        <button
          onClick={() => slide('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-black/60"
        >
          <ChevronLeft size={32} />
        </button>

        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          onClick={() => slide('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-black/60"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
