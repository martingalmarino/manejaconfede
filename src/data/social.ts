export interface SocialLinks {
  fedeInstagram: string;
  fedeInstagramHandle: string;
  pragaInstagram: string;
  pragaInstagramHandle: string;
  youtube: string;
  youtubeHandle: string;
}

export const social: SocialLinks = {
  fedeInstagram: 'https://www.instagram.com/manejaconfede/',
  fedeInstagramHandle: '@manejaconfede',
  pragaInstagram: 'https://www.instagram.com/praga_escueladeconductores/',
  pragaInstagramHandle: '@praga_escueladeconductores',
  youtube: 'https://www.youtube.com/@manejaconfede',
  youtubeHandle: '@manejaconfede',
};

export interface InstagramPost {
  id: string;
  permalink: string;
  image: string;
  alt: string;
  title: string;
  publishedAt?: string;
}

/**
 * Curated Instagram feed for the “Contenido destacado” grid.
 * Only complete, real entries are rendered. Leave empty until real permalinks exist.
 * Do not invent post URLs or use classroom photos as fake Instagram screenshots.
 */
export const instagramPosts: InstagramPost[] = [];

export interface YouTubeVideo {
  videoId: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

/**
 * Verified YouTube videos only.
 * Leave empty until real video IDs from the channel are supplied.
 */
export const youtubeVideos: {
  featured: YouTubeVideo | null;
  secondary: YouTubeVideo[];
} = {
  featured: null,
  secondary: [],
};
