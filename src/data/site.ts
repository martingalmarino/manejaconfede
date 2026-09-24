import { publishingMode, canonicalDomain } from './publishing.mjs';

export type PublishingMode = 'preview' | 'production';

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  title: string;
  description: string;
  locale: string;
  language: string;
  location: string;
  /** Real domain without protocol. Leave empty until confirmed. */
  canonicalDomain: string;
  publishingMode: PublishingMode;
  ogImagePath: string;
}

/**
 * Site identity and publishing controls.
 * Edit publishingMode and canonicalDomain in src/data/publishing.mjs.
 */
export const site: SiteConfig = {
  name: 'Manejá con Fede',
  shortName: 'Manejá con Fede',
  tagline: 'Instructor de manejo · Creador de contenido · Córdoba',
  title: 'Manejá con Fede | Cursos de manejo en Córdoba',
  description:
    'Conocé a Fede, sus videos y los cursos de manejo de Praga en Córdoba. Aprendé desde cero, perfeccioná tu conducción o proponé una colaboración.',
  locale: 'es_AR',
  language: 'es-AR',
  location: 'Córdoba, Argentina',
  canonicalDomain,
  publishingMode: publishingMode as PublishingMode,
  ogImagePath: '/og-image.jpg',
};

export function getSiteUrl(): string | undefined {
  if (site.publishingMode !== 'production' || !site.canonicalDomain) {
    return undefined;
  }
  return `https://${site.canonicalDomain}`;
}

export function shouldIndex(): boolean {
  return site.publishingMode === 'production' && Boolean(site.canonicalDomain);
}
