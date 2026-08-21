export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  url: string;
  image: string;
  industry: string;
  service: string;
  technologies: string[];
  results: { value: string; metric: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'fluteon',
    slug: 'fluteon',
    title: 'Fluteon',
    description: 'A premium landing page and platform for specialized audio products and professional services.',
    fullDescription: 'Fluteon is an online platform showcasing premium audio products and flute instruments. We designed and built a highly interactive, fast, and visually beautiful web experience that highlights product craftsmanship and engages music enthusiasts worldwide.',
    url: 'https://www.fluteon.com',
    image: '/assets/projects/fluteon.jpg',
    industry: 'E-commerce & Music',
    service: 'Web Development',
    technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    results: [
      { value: '45%', metric: 'Increase in visitor retention' },
      { value: '< 1.5s', metric: 'Page load speed' }
    ],
    featured: true
  },
  {
    id: 'venusgarments',
    slug: 'venus-garments',
    title: 'Venus Garments',
    description: 'A professional website for a leading garment manufacturer showcasing product catalogs and corporate presence.',
    fullDescription: 'Venus Garments is a well-established textile and apparel manufacturer. Ruvanta designed a modern corporate website with interactive product catalogs, seamless navigation, and contact flows, helping them attract international buyer inquiries.',
    url: 'http://venusgarments.in',
    image: '/assets/projects/venusgarments.jpg',
    industry: 'Manufacturing & Fashion',
    service: 'Web Development',
    technologies: ['React', 'CSS Modules', 'Node.js', 'Express'],
    results: [
      { value: '60%', metric: 'Growth in international buyer inquiries' },
      { value: '2x', metric: 'Faster loading of product catalogs' }
    ],
    featured: true
  },
  {
    id: 'paxtechs',
    slug: 'paxtechs',
    title: 'Paxtechs',
    description: 'An advanced technology consultancy platform displaying enterprise software solutions and service offerings.',
    fullDescription: 'Paxtechs is a dynamic technology services company. We developed a sleek, corporate portal that highlights their software development, Cloud solutions, and IT consultancy services with a high-conversion client acquisition flow.',
    url: 'http://Paxtechs.com',
    image: '/assets/projects/paxtechs.jpg',
    industry: 'IT Services & Consulting',
    service: 'Web Development & Branding',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    results: [
      { value: '50%', metric: 'Boost in brand engagement' },
      { value: '35%', metric: 'Increase in contact form conversions' }
    ],
    featured: true
  },
  {
    id: 'hotelmanagement',
    slug: 'hotel-management-system',
    title: 'Hotel Management App',
    description: 'A fully functional dashboard for hotel bookings, room allocations, inventory tracking, and checkout operations.',
    fullDescription: 'This complex web application provides a complete dashboard management solution for hotels. It lets hotel administrators track room occupancies, handle client check-ins/check-outs, manage inventory, and generate digital invoices.',
    url: 'https://hotelmanagement-xi-ten.vercel.app/',
    image: '/assets/projects/hotelmanagement.jpg',
    industry: 'Hospitality & SaaS',
    service: 'App Development',
    technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'],
    results: [
      { value: '100%', metric: 'Fully automated room allocation' },
      { value: '40%', metric: 'Reduction in checkout processing time' }
    ],
    featured: true
  }
];
