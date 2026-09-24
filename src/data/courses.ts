export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  inclusions: string[];
  ctaLabel: string;
  inquiryLabel: string;
}

export interface ScheduleBlock {
  title: string;
  lines: string[];
}

export const coursesIntro = {
  eyebrow: 'Praga Escuela de Conductores',
  title: 'Tu próximo paso empieza al volante.',
  body: 'Cursos de manejo en Córdoba para empezar desde cero o perfeccionar tu conducción. Aprendé con instructores capacitados y una propuesta que combina práctica y educación vial.',
  availabilityNote: 'Consultá disponibilidad y coordiná tus clases con Praga.',
};

export const courses: Course[] = [
  {
    id: 'principiantes',
    title: 'Primeros pasos',
    subtitle: 'Curso para principiantes',
    description:
      'Ideal si nunca manejaste o tenés poca experiencia. Empezá a conocer el vehículo y a desarrollar tus habilidades al volante.',
    inclusions: ['8 clases prácticas', 'Taller Teórico de Educación Vial'],
    ctaLabel: 'Consultar curso inicial',
    inquiryLabel: 'el curso para principiantes',
  },
  {
    id: 'perfeccionamiento',
    title: 'Más confianza, mejor técnica',
    subtitle: 'Curso de perfeccionamiento',
    description:
      'Para quienes ya tienen conocimientos básicos y quieren mejorar su conducción, practicar maniobras o ganar confianza al circular.',
    inclusions: ['4 clases prácticas', 'Taller Teórico de Educación Vial'],
    ctaLabel: 'Consultar perfeccionamiento',
    inquiryLabel: 'el curso de perfeccionamiento',
  },
];

export const reinforcement = {
  title: '¿Necesitás más práctica?',
  body: 'Consultá por refuerzos de 2, 4 u 8 clases para seguir trabajando en lo que necesitás mejorar.',
  ctaLabel: 'Consultar clases de refuerzo',
  inquiryLabel: 'clases de refuerzo',
};

export const trustItems = [
  'Transmisión manual',
  'Doble comando',
  'Seguro de autoescuela',
  'Instructores capacitados',
] as const;

export const schedules: ScheduleBlock[] = [
  {
    title: 'Clases prácticas',
    lines: [
      'Lunes a viernes: de 9:00 a 13:00 y de 16:00 a 20:00.',
      'Sábados: de 10:00 a 14:00.',
    ],
  },
  {
    title: 'Taller teórico online',
    lines: ['Sábados: de 10:00 a 13:00.'],
  },
];
