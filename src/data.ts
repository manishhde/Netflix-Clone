/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Movie, UserProfile } from './types';

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Neon Odyssey',
    description: 'In a futuristic cyberpunk city, a rogue hacker discovers a secret that could collapse the world virtual reality infrastructure.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=400&h=600',
    bannerUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1920&h=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '2h 15m',
    genre: 'Sci-Fi',
    rating: 'PG-13',
    year: 2024
  },
  {
    id: '2',
    title: 'Silent Echoes',
    description: 'A detective in a quiet mountain town investigates a series of disappearances that seem to defy physical explanation.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400&h=600',
    bannerUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920&h=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '1h 55m',
    genre: 'Mystery',
    rating: 'R',
    year: 2023
  },
  {
    id: '3',
    title: 'Velocity Prime',
    description: 'Competitive urban driving reaches a new level of danger when a secretive underground race series goes global.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400&h=600',
    bannerUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920&h=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '1h 40m',
    genre: 'Action',
    rating: 'PG-13',
    year: 2024
  },
  {
    id: '4',
    title: 'Emerald Shadows',
    description: 'Deep in the Amazon rainforest, a group of researchers find remnants of an ancient civilization with advanced bio-technology.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400&h=600',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920&h=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '2h 10m',
    genre: 'Adventure',
    rating: 'PG',
    year: 2022
  },
  {
    id: '5',
    title: 'The Last Frontier',
    description: 'Humanity first deep-space colony faces a catastrophic threat from an unknown cosmic anomaly.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400&h=600',
    bannerUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1920&h=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    duration: '2h 30m',
    genre: 'Sci-Fi',
    rating: 'R',
    year: 2025
  },
  {
    id: '6',
    title: 'Midnight Sun',
    description: 'A romantic drama set in the Arctic circle where the sun never sets, blurring the lines between dreams and reality.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=400&h=600',
    bannerUrl: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1920&h=1080',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    duration: '1h 45m',
    genre: 'Romance',
    rating: 'PG-13',
    year: 2023
  },
];

export const CATEGORIES = [
  'Trending Now',
  'Top Picks',
  'Action',
  'Sci-Fi',
  'New Releases',
  'Watch Again'
];

export const PROFILES: UserProfile[] = [
  { id: '1', name: 'John Doe', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
  { id: '2', name: 'Jane Smith', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' },
  { id: '3', name: 'Kids', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kids' },
];
