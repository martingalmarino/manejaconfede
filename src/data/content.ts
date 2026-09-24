export const bio = {
  title: 'Soy Fede. Vamos paso a paso.',
  paragraphs: [
    'Soy instructor de manejo, creador de contenido y dueño de Praga Escuela de Conductores, en Córdoba. En mis redes comparto consejos y explicaciones sobre conducción para acompañarte desde tus primeras dudas al volante.',
    'En Praga combinamos práctica y educación vial, con cursos para quienes empiezan de cero y para quienes quieren mejorar su técnica y ganar confianza.',
  ],
  priorities: ['Explicaciones claras', 'Práctica y teoría', 'Seguridad al volante'],
};

export const hero = {
  eyebrow: 'Instructor de manejo · Creador de contenido · Córdoba',
  title: 'Aprendé a manejar con confianza.',
  intro:
    'Soy Fede, instructor de manejo y creador de contenido. Te acompaño con consejos y explicaciones para entender cada paso al volante. Y en Praga, mi escuela de conductores, podés llevar ese aprendizaje a la práctica.',
  primaryCta: { label: 'Conocé los cursos', href: '#cursos' },
  secondaryCta: { label: 'Mirá mis videos', href: '#youtube' },
  tertiaryCta: {
    label: '¿Sos una marca? Trabajemos juntos',
    href: '#marcas',
  },
  imageCaption: 'Clases de manejo en Praga',
};

export const instagramSection = {
  title: 'El manejo también se aprende mirando.',
  intro:
    'Consejos, explicaciones y situaciones al volante. Encontrá más contenido en mi Instagram.',
  curatedLabel: 'Contenido destacado',
  fallbackCta: 'Ver publicaciones en Instagram',
};

export const youtubeSection = {
  title: 'Poné play y aprendé conmigo.',
  intro: 'Tutoriales y explicaciones para acompañarte en cada etapa de tu aprendizaje.',
  channelCta: 'Ir a mi canal de YouTube',
};

export const brands = {
  eyebrow: 'Marcas y colaboraciones',
  title: 'Hagamos contenido que conecte.',
  body: 'Si tu marca tiene algo para aportar al mundo de la conducción, la movilidad o la seguridad vial, conversemos. Podemos pensar una colaboración que conecte con mi contenido y con las personas que lo siguen.',
  formats: [
    {
      title: 'Contenido patrocinado',
      description: 'Integraciones en videos, reels o publicaciones.',
    },
    {
      title: 'Contenido para tu marca',
      description: 'Piezas audiovisuales para los canales de la empresa.',
    },
    {
      title: 'Demostraciones de productos',
      description: 'Contenido contextualizado en conducción y movilidad.',
    },
    {
      title: 'Campañas y acciones especiales',
      description: 'Educación vial, eventos y colaboraciones.',
    },
  ],
  proposalTypes: [
    'Contenido patrocinado',
    'Contenido para tu marca',
    'Demostración de producto',
    'Campaña o acción especial',
    'Otra propuesta',
  ],
};

/**
 * Optional verified commercial metrics.
 * Hide modules when empty. Never invent follower counts or demographics.
 */
export interface CommercialMetric {
  label: string;
  value: string;
  updatedAt: string;
}

export const commercialMetrics: CommercialMetric[] = [];

export interface PortfolioExample {
  title: string;
  description: string;
  url?: string;
}

export const portfolioExamples: PortfolioExample[] = [];

export const nav = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Praga y cursos', href: '#cursos' },
  { label: 'Contenidos', href: '#instagram' },
  { label: 'Para marcas', href: '#marcas' },
] as const;
