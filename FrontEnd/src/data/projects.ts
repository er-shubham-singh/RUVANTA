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
  },
  {
    id: 'mayfair',
    slug: 'mayfair-highlands',
    title: 'Mist, Mayfair Highlands',
    description: 'Luxury resort social media management & brand optimization for visual storytelling.',
    fullDescription: 'Mist, Mayfair Highlands is a luxury villa resort nestled in the hills. Ruvanta designed a premium social media brand guide, executing visual story campaigns, photography styling, and online engagement strategies to attract premium tourism guests.',
    url: 'https://www.instagram.com/mayfairhighlands?igsh=a2Jla3p2Ym45cnFr',
    image: '/assets/projects/mayfair.png',
    industry: 'Hospitality & Real Estate',
    service: 'Social Media Handling',
    technologies: ['Instagram Strategy', 'Visual Identity Design', 'Meta Retargeting'],
    results: [
      { value: '80%', metric: 'Increase in organic account reach' },
      { value: '3x', metric: 'Higher booking inquiries from Instagram' }
    ],
    featured: true
  },
  {
    id: 'revive-fitness',
    slug: 'revive-fitness-gym',
    title: 'Revive Fitness',
    description: 'Vibrant fitness community branding and visual grid alignment for high lead generation.',
    fullDescription: 'Revive Fitness is a premium modern gym facility. We configured their Instagram profile grid, designed high-engagement reels templates, fitness advice carousel posts, and targeted ads boosting local gym memberships.',
    url: 'https://www.instagram.com/revivefitnessgym?igsh=MTlucTZuN3lobW8xNQ==',
    image: '/assets/projects/revive.png',
    industry: 'Health & Wellness',
    service: 'Social Media Handling & Design',
    technologies: ['Grid Design', 'Reels Editing', 'Meta Ads'],
    results: [
      { value: '120%', metric: 'Growth in active gym member sign-ups' },
      { value: '50k+', metric: 'Monthly video views' }
    ],
    featured: true
  },
  {
    id: 'runwithbee',
    slug: 'run-with-bee-club',
    title: 'Run Bee With Club',
    description: 'Community sports event campaign management and graphic asset creation.',
    fullDescription: 'Run Bee With Club is a running community. Ruvanta created all design collaterals, running event announcement posts, marathon milestone badges, and handled daily social interaction calendars to grow active member networks.',
    url: 'https://www.instagram.com/_runwithbee?igsh=eTJkZTd0djV1Mzdn',
    image: '/assets/projects/runwithbee.png',
    industry: 'Sports & Fitness',
    service: 'Social Media & Graphics',
    technologies: ['Social Media Handling', 'Figma Graphics', 'Event Planning'],
    results: [
      { value: '250+', metric: 'Active marathon participants' },
      { value: '95%', metric: 'Engagement score growth' }
    ],
    featured: true
  },
  {
    id: 'recoverysingh',
    slug: 'recovery-singh',
    title: 'Recovery Singh',
    description: 'Professional physiotherapy web platform & medical wellness branding.',
    fullDescription: 'Recovery Singh provides advanced sports therapy and physical rehabilitation. We developed their responsive medical landing page, booking form architecture, and synced their corporate identity with automated social media tips.',
    url: 'https://recoverysingh.com/',
    image: '/assets/projects/recoverysingh.png',
    industry: 'Healthcare & Wellness',
    service: 'WordPress Development & Branding',
    technologies: ['WordPress', 'Elementor Pro', 'Booking Plugin', 'Instagram Branding'],
    results: [
      { value: '75%', metric: 'Online appointment bookings growth' },
      { value: '1.2s', metric: 'Mobile page response speed' }
    ],
    featured: true
  },
  {
    id: 'higacafe',
    slug: 'higa-cafe',
    title: 'Higa Cafe',
    description: 'Aesthetic food and beverage visual storytelling and customer community handling.',
    fullDescription: 'Higa Cafe is a cozy specialty coffee house. We designed their menu guides, ran local store visits campaigns, structured aesthetic reels, and designed Instagram posts highlighting specialty food dishes.',
    url: 'https://www.instagram.com/letsgohiga?igsh=Mzl1ejl2ZzBrY3g5',
    image: '/assets/projects/higacafe.png',
    industry: 'Food & Beverage',
    service: 'Social Media Handling',
    technologies: ['Visual Storytelling', 'Canva/Figma Layouts', 'Community Outreach'],
    results: [
      { value: '90%', metric: 'Increase in foot traffic inquiries' },
      { value: '45%', metric: 'Growth in Instagram page followers' }
    ],
    featured: true
  }
];
