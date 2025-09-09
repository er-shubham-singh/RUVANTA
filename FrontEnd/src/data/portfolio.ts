export const portfolioProjects = [
  {
    id: 'fintech-dashboard',
    slug: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    description: 'Real-time financial analytics platform with advanced data visualization',
    industry: 'FinTech',
    service: 'Web Development',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    results: [
      { metric: 'User Engagement', value: '+65%' },
      { metric: 'Load Time', value: '-40%' },
      { metric: 'Data Processing', value: '10x faster' }
    ],
    challenge: 'Legacy system struggled with real-time data processing and user experience was outdated',
    approach: 'Built modern React dashboard with real-time WebSocket connections and optimized backend',
    solution: 'Delivered scalable platform handling millions of transactions with intuitive interface',
    outcome: 'Client saw 65% increase in user engagement and 40% reduction in load times',
    featured: true
  },
  {
    id: 'ecommerce-mobile',
    slug: 'ecommerce-mobile',
    title: 'Luxury E-commerce Mobile App',
    description: 'Premium shopping experience with AR product visualization',
    industry: 'E-commerce',
    service: 'Mobile Development',
    technologies: ['React Native', 'ARKit', 'Stripe', 'Firebase'],
    image: 'https://images.pexels.com/photos/34577/pexels-photo-34577.jpeg',
    results: [
      { metric: 'App Downloads', value: '100K+' },
      { metric: 'Conversion Rate', value: '+45%' },
      { metric: 'App Store Rating', value: '4.8/5' }
    ],
    challenge: 'Client needed mobile app to compete with established luxury brands',
    approach: 'Developed native mobile app with AR features and seamless checkout',
    solution: 'Created premium mobile experience with innovative AR product visualization',
    outcome: 'App reached 100K+ downloads with 4.8/5 rating and 45% conversion increase',
    featured: true
  },
  {
    id: 'healthcare-platform',
    slug: 'healthcare-platform',
    title: 'Telemedicine Platform',
    description: 'HIPAA-compliant platform connecting patients with healthcare providers',
    industry: 'Healthcare',
    service: 'Web Development',
    technologies: ['Next.js', 'WebRTC', 'AWS', 'HIPAA'],
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    results: [
      { metric: 'Patient Satisfaction', value: '95%' },
      { metric: 'Consultation Time', value: '-30%' },
      { metric: 'Provider Efficiency', value: '+50%' }
    ],
    challenge: 'Healthcare provider needed secure video consultation platform during pandemic',
    approach: 'Built HIPAA-compliant platform with encrypted video calls and patient records',
    solution: 'Delivered secure telemedicine solution with integrated scheduling and billing',
    outcome: '95% patient satisfaction with 30% reduction in consultation time',
    featured: false
  },
  {
    id: 'saas-analytics',
    slug: 'saas-analytics',
    title: 'SaaS Analytics Platform',
    description: 'Business intelligence dashboard for SaaS companies',
    industry: 'SaaS',
    service: 'Web Development',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    results: [
      { metric: 'Data Processing', value: '5x faster' },
      { metric: 'User Retention', value: '+35%' },
      { metric: 'Revenue Growth', value: '+28%' }
    ],
    challenge: 'SaaS startup needed comprehensive analytics to understand user behavior',
    approach: 'Created real-time analytics platform with customizable dashboards',
    solution: 'Built scalable BI platform processing millions of events daily',
    outcome: '35% increase in user retention and 28% revenue growth',
    featured: true
  },
  {
    id: 'restaurant-ordering',
    slug: 'restaurant-ordering',
    title: 'Restaurant Ordering System',
    description: 'Complete ordering and delivery management platform',
    industry: 'Food & Beverage',
    service: 'Mobile Development',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    results: [
      { metric: 'Order Volume', value: '+80%' },
      { metric: 'Delivery Time', value: '-25%' },
      { metric: 'Customer Satisfaction', value: '4.7/5' }
    ],
    challenge: 'Restaurant chain needed unified ordering system across multiple locations',
    approach: 'Developed cross-platform app with real-time order tracking',
    solution: 'Created comprehensive ordering system with delivery management',
    outcome: '80% increase in online orders with 25% faster delivery times',
    featured: false
  },
  {
    id: 'edtech-platform',
    slug: 'edtech-platform',
    title: 'Online Learning Platform',
    description: 'Interactive e-learning platform with video streaming and assessments',
    industry: 'Education',
    service: 'Web Development',
    technologies: ['React', 'WebRTC', 'AWS', 'Socket.io'],
    image: 'https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg',
    results: [
      { metric: 'Student Engagement', value: '+60%' },
      { metric: 'Course Completion', value: '+40%' },
      { metric: 'Platform Uptime', value: '99.9%' }
    ],
    challenge: 'Educational institution needed scalable platform for remote learning',
    approach: 'Built interactive learning platform with live streaming and collaboration tools',
    solution: 'Delivered comprehensive e-learning solution with video and assessment features',
    outcome: '60% increase in student engagement with 99.9% uptime',
    featured: true
  }
];

export const industries = ['All', 'FinTech', 'E-commerce', 'Healthcare', 'SaaS', 'Food & Beverage', 'Education'];
export const serviceTypes = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];