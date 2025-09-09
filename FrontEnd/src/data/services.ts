export const services = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom web applications built with modern technologies and scalable architecture.',
    icon: '🌐',
    timeline: '4-12 weeks',
    deliverables: ['Responsive web application', 'Source code', 'Documentation', 'Deployment'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    priceRange: '$5,000 - $25,000',
    process: [
      {
        step: 'Discovery',
        description: 'Understanding your business goals and technical requirements'
      },
      {
        step: 'Design',
        description: 'Creating wireframes, mockups, and user experience flows'
      },
      {
        step: 'Build',
        description: 'Developing the application with clean, maintainable code'
      },
      {
        step: 'Launch',
        description: 'Deployment, testing, and going live'
      },
      {
        step: 'Support',
        description: 'Ongoing maintenance and feature updates'
      }
    ],
    problemStatement: 'Many businesses struggle with outdated websites that don\'t convert visitors into customers or scale with their growth.',
    features: [
      'Responsive design for all devices',
      'SEO optimization',
      'Performance optimization',
      'Modern UI/UX',
      'Content management system',
      'Analytics integration'
    ]
  },
  {
    id: 'mobile-development',
    slug: 'mobile-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    timeline: '6-16 weeks',
    deliverables: ['iOS/Android apps', 'App store deployment', 'Backend API', 'Documentation'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    priceRange: '$10,000 - $50,000',
    process: [
      {
        step: 'Discovery',
        description: 'Understanding user needs and platform requirements'
      },
      {
        step: 'Design',
        description: 'Creating intuitive mobile interfaces and user flows'
      },
      {
        step: 'Build',
        description: 'Developing native features and functionality'
      },
      {
        step: 'Launch',
        description: 'App store submission and approval process'
      },
      {
        step: 'Support',
        description: 'Updates, bug fixes, and feature enhancements'
      }
    ],
    problemStatement: 'Companies need mobile presence to reach customers where they spend most of their time, but lack the expertise to build quality apps.',
    features: [
      'Native performance',
      'Offline functionality',
      'Push notifications',
      'App store optimization',
      'User authentication',
      'Analytics and crash reporting'
    ]
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered design that converts visitors into loyal customers.',
    icon: '🎨',
    timeline: '2-6 weeks',
    deliverables: ['Design system', 'Wireframes', 'Prototypes', 'Asset library'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
    priceRange: '$3,000 - $15,000',
    process: [
      {
        step: 'Discovery',
        description: 'Research user behavior and business objectives'
      },
      {
        step: 'Design',
        description: 'Create user personas, wireframes, and visual designs'
      },
      {
        step: 'Build',
        description: 'Develop interactive prototypes and design systems'
      },
      {
        step: 'Launch',
        description: 'Deliver final assets and design specifications'
      },
      {
        step: 'Support',
        description: 'Design iterations based on user feedback'
      }
    ],
    problemStatement: 'Poor user experience leads to high bounce rates and lost revenue. Users expect intuitive, beautiful interfaces.',
    features: [
      'User research and personas',
      'Information architecture',
      'Interactive prototypes',
      'Design system creation',
      'Usability testing',
      'Accessibility compliance'
    ]
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-commerce Solutions',
    shortDescription: 'Complete online stores with payment processing and inventory management.',
    icon: '🛒',
    timeline: '6-14 weeks',
    deliverables: ['Online store', 'Payment integration', 'Admin dashboard', 'Mobile optimization'],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento'],
    priceRange: '$8,000 - $35,000',
    process: [
      {
        step: 'Discovery',
        description: 'Understanding your products, customers, and sales process'
      },
      {
        step: 'Design',
        description: 'Creating conversion-optimized store layouts'
      },
      {
        step: 'Build',
        description: 'Developing secure payment and inventory systems'
      },
      {
        step: 'Launch',
        description: 'Going live with full testing and optimization'
      },
      {
        step: 'Support',
        description: 'Ongoing maintenance and conversion optimization'
      }
    ],
    problemStatement: 'Businesses need robust online selling platforms that handle everything from product catalogs to secure payments.',
    features: [
      'Product catalog management',
      'Secure payment processing',
      'Inventory tracking',
      'Order management',
      'Customer accounts',
      'Analytics and reporting'
    ]
  },
  {
    id: 'api-integration',
    slug: 'api-integration',
    title: 'API Integration',
    shortDescription: 'Connect your systems with third-party services and custom APIs.',
    icon: '🔗',
    timeline: '2-8 weeks',
    deliverables: ['API endpoints', 'Documentation', 'Testing suite', 'Monitoring'],
    technologies: ['REST API', 'GraphQL', 'Node.js', 'Python', 'AWS'],
    priceRange: '$3,000 - $20,000',
    process: [
      {
        step: 'Discovery',
        description: 'Mapping data flow and integration requirements'
      },
      {
        step: 'Design',
        description: 'Planning API architecture and endpoints'
      },
      {
        step: 'Build',
        description: 'Developing secure, scalable integrations'
      },
      {
        step: 'Launch',
        description: 'Testing and deploying integrations'
      },
      {
        step: 'Support',
        description: 'Monitoring and maintaining connections'
      }
    ],
    problemStatement: 'Companies use multiple software tools that don\'t communicate, leading to manual work and data inconsistencies.',
    features: [
      'Third-party integrations',
      'Custom API development',
      'Data synchronization',
      'Webhook implementation',
      'Rate limiting and caching',
      'Error handling and logging'
    ]
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortDescription: 'Scalable infrastructure and automated deployment pipelines.',
    icon: '☁️',
    timeline: '3-10 weeks',
    deliverables: ['Cloud infrastructure', 'CI/CD pipelines', 'Monitoring setup', 'Documentation'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    priceRange: '$5,000 - $25,000',
    process: [
      {
        step: 'Discovery',
        description: 'Assessing current infrastructure and requirements'
      },
      {
        step: 'Design',
        description: 'Planning scalable cloud architecture'
      },
      {
        step: 'Build',
        description: 'Setting up infrastructure and automation'
      },
      {
        step: 'Launch',
        description: 'Migrating applications and going live'
      },
      {
        step: 'Support',
        description: 'Monitoring, scaling, and optimization'
      }
    ],
    problemStatement: 'Managing servers, deployments, and scaling manually is time-consuming and error-prone.',
    features: [
      'Auto-scaling infrastructure',
      'Continuous deployment',
      'Monitoring and alerting',
      'Backup and disaster recovery',
      'Security compliance',
      'Cost optimization'
    ]
  }
];