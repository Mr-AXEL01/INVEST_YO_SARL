export const BRAND = {
  name: 'INVEST YO',
  legal: 'INVEST YO SARL',
  tagline: 'Solutions Industrielles & Numériques',
  phone: '+212 630 715 846',
  email: 'ste.investyo@gmail.com',
  address: 'Rue 64 Quartier Taghalef, M\'Rirt – Maroc',
  founded: '2024',
  manager: 'M. Younes Ouamira',
  mapCoords: { lat: 33.1633, lng: -5.5631 },
} as const

export const NAV_ITEMS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'À Propos', href: '#apropos' },
  { label: 'Atouts', href: '#atouts' },
  { label: 'Contact', href: '#contact' },
] as const

export interface Service {
  icon: string
  title: string
  description: string
  items: string[]
}

export const SERVICES: Service[] = [
  {
    icon: 'bolt',
    title: 'Électricité & Électromécanique',
    description:
      'Fourniture et installation d\'équipements électriques, installations basse et moyenne tension, automatisation industrielle et maintenance électromécanique.',
    items: [
      'Installations électriques BT/MT',
      'Automatisation industrielle',
      'Maintenance électromécanique',
      'Équipements hydrauliques',
    ],
  },
  {
    icon: 'wrench',
    title: 'Construction Métallique',
    description:
      'Travaux de construction métallique, fabrication mécanique sur mesure, installations techniques et maintenance industrielle complète.',
    items: [
      'Construction métallique',
      'Fabrication mécanique',
      'Plomberie industrielle',
      'Maintenance industrielle',
    ],
  },
  {
    icon: 'cart',
    title: 'Fourniture & Négoce',
    description:
      'Négoce d\'articles industriels et techniques, fourniture d\'équipements électriques et distribution pour professionnels et institutions publiques.',
    items: [
      'Articles industriels',
      'Équipements électriques',
      'Distribution professionnelle',
      'Marchés publics',
    ],
  },
  {
    icon: 'truck',
    title: 'Logistique & Services',
    description:
      'Transport logistique, multiservices techniques et assistance technique sur site pour vos projets industriels.',
    items: [
      'Transport logistique',
      'Multiservices techniques',
      'Assistance sur site',
      'Gestion de projets',
    ],
  },
  {
    icon: 'code',
    title: 'Solutions Numériques',
    description:
      'Création de sites web professionnels, développement d\'applications web et mobiles, solutions digitales sur mesure pour entreprises et institutions.',
    items: [
      'Sites web professionnels',
      'Applications web & mobile',
      'Solutions sur mesure',
      'Transformation digitale',
    ],
  },
]

export const VALUES = [
  { icon: 'star', label: 'Qualité', description: 'Exigence de qualité dans chaque intervention' },
  { icon: 'shield', label: 'Sécurité', description: 'Normes de sécurité rigoureuses' },
  { icon: 'users', label: 'Satisfaction Client', description: 'Votre réussite est notre priorité' },
  { icon: 'cpu', label: 'Innovation', description: 'Solutions techniques à la pointe' },
] as const

export const STRENGTHS = [
  'Techniciens électromécaniciens et électriciens qualifiés',
  'Atelier équipé pour fabrication et maintenance industrielle',
  'Véhicules d\'intervention et outillage professionnel',
  'Équipe de développement numérique qualifiée',
  'Méthodologie axée sur la qualité et le respect des délais',
] as const
