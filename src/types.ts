/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  bannerUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
  rating: string;
  year: number;
}

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
}
