export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: string;
  originalPrice: string;
  discount: string;
  icon: string;
  technologies: string[];
  features: string[];
  syllabus: { week: string; topic: string; details: string }[];
}

export const courses: Course[] = [
  {
    id: 'mern-stack',
    slug: 'mern-stack-developer',
    title: 'MERN Full Stack Web Developer',
    shortDescription: 'Master modern full-stack web development using MongoDB, Express, React, and Node.js.',
    description: 'Become a job-ready full-stack developer. This comprehensive program covers everything from frontend layouts to backend database architecture, server-side development, RESTful API design, and cloud deployments.',
    duration: '16 Weeks',
    price: '₹9,999',
    originalPrice: '₹24,999',
    discount: '60% OFF',
    icon: '💻',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'TypeScript', 'Git/GitHub'],
    features: [
      'Build 5+ production-grade projects',
      'One-on-one mentorship & doubt sessions',
      'Resume reviews & mock interviews',
      'Certificate of completion'
    ],
    syllabus: [
      { week: 'Weeks 1-4', topic: 'Frontend Foundations (HTML5, CSS3, JS & Tailwind)', details: 'Master modern JavaScript, semantic HTML, responsive CSS layouts, and utility-first styling with Tailwind CSS.' },
      { week: 'Weeks 5-8', topic: 'React.js State & Frontend Architecture', details: 'Hooks, context API, state management with Redux Toolkit, routing, hooks, forms, and consuming REST APIs.' },
      { week: 'Weeks 9-12', topic: 'Node.js & Express.js Backend Development', details: 'Building secure servers, authentication (JWT), error handling, middleware, file uploads, and MVC architecture.' },
      { week: 'Weeks 13-16', topic: 'MongoDB Database, Security & Deployment', details: 'Schema design, aggregation pipeline, connecting frontend & backend, security best practices, and deploying to AWS/Vercel/Render.' }
    ]
  },
  {
    id: 'python-developer',
    slug: 'python-developer-course',
    title: 'Python Developer Course',
    shortDescription: 'Learn Python programming from scratch to advanced database, scripting, and backend development.',
    description: 'Learn one of the most versatile programming languages. This course covers core Python concepts, Object-Oriented Programming (OOP), database operations, writing automation scripts, and web development using Django or FastAPI.',
    duration: '12 Weeks',
    price: '₹7,999',
    originalPrice: '₹19,999',
    discount: '60% OFF',
    icon: '🐍',
    technologies: ['Python', 'Django', 'FastAPI', 'SQLite/PostgreSQL', 'OOPs Concepts', 'REST APIs', 'Unit Testing', 'Automation Scripts'],
    features: [
      'Real-world automation & web projects',
      'Daily coding challenges & feedback',
      'Learn backend API structures',
      'Industry-recognized certificate'
    ],
    syllabus: [
      { week: 'Weeks 1-3', topic: 'Python Syntax & Logic Foundations', details: 'Variables, loops, functions, lists, dictionaries, error handling, and basic algorithms.' },
      { week: 'Weeks 4-6', topic: 'Object-Oriented Programming (OOP) & File I/O', details: 'Classes, inheritance, polymorphism, modules, handling CSV/JSON files, and database integration.' },
      { week: 'Weeks 7-9', topic: 'Backend Web Frameworks (FastAPI & Django)', details: 'Setting up servers, model-view-template architecture, routing, and creating robust database schemas.' },
      { week: 'Weeks 10-12', topic: 'API Development, Testing & Cloud Deployment', details: 'Writing unit tests, CRUD endpoints, token authentication, and deploying Python web projects.' }
    ]
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design-course',
    title: 'UI/UX Design Masterclass',
    shortDescription: 'Master user interface and user experience design using Figma and modern design principles.',
    description: 'Unlock your creative potential and learn the art of designing beautiful, user-centric interfaces. From conducting user research to creating high-fidelity interactive prototypes in Figma, you will build a solid design portfolio.',
    duration: '8 Weeks',
    price: '₹5,999',
    originalPrice: '₹14,999',
    discount: '60% OFF',
    icon: '🎨',
    technologies: ['Figma', 'Wireframing', 'User Research', 'Interactive Prototyping', 'Design Systems', 'Typography & Color Theory', 'Usability Testing'],
    features: [
      'Build a strong Figma portfolio',
      'Critique sessions with design professionals',
      'Learn mobile & web-responsive layouts',
      'Placement preparation'
    ],
    syllabus: [
      { week: 'Weeks 1-2', topic: 'UX Research & Design Foundations', details: 'User personas, empathy maps, information architecture, and wireframing techniques.' },
      { week: 'Weeks 3-4', topic: 'UI Design & Visual Guidelines', details: 'Color theory, grids, typography, spacing, and building reusable UI design systems.' },
      { week: 'Weeks 5-6', topic: 'High-Fidelity Prototyping in Figma', details: 'Creating responsive components, auto-layout, interactive variants, and micro-animations.' },
      { week: 'Weeks 7-8', topic: 'Usability Testing & Case Studies', details: 'Testing prototypes with users, revising designs based on data, and creating a UX case study.' }
    ]
  },
  {
    id: 'wordpress-developer',
    slug: 'wordpress-developer-course',
    title: 'WordPress Developer Course',
    shortDescription: 'Build beautiful, functional websites and e-commerce stores without writing complex code.',
    description: 'Learn how to build, customize, and maintain professional websites for clients. You will master Elementor, WooCommerce, plugin configurations, SEO optimization, and secure site migrations.',
    duration: '6 Weeks',
    price: '₹3,999',
    originalPrice: '₹9,999',
    discount: '60% OFF',
    icon: '📝',
    technologies: ['WordPress CMS', 'Elementor Pro', 'WooCommerce', 'SEO Plugins', 'Payment Gateways', 'Domain & Hosting Setup', 'Backup & Security'],
    features: [
      'Create 3 functional client websites',
      'Freelancing guide: how to land clients',
      'E-commerce setup from start to finish',
      'WordPress security & optimization tips'
    ],
    syllabus: [
      { week: 'Week 1', topic: 'WordPress Installation & Configuration', details: 'Hosting setup, databases, local WordPress setup, dashboard walkthrough, and theme configurations.' },
      { week: 'Weeks 2-3', topic: 'Page Building with Elementor', details: 'Creating custom headers/footers, responsive landing pages, template creation, and layouts.' },
      { week: 'Week 4', topic: 'E-Commerce with WooCommerce', details: 'Adding physical/digital products, tax, coupon setups, and payment gateway integration (Razorpay/Stripe).' },
      { week: 'Weeks 5-6', topic: 'SEO, Security, Speed & Freelance Setup', details: 'Yoast/RankMath SEO, cache plugins, malware prevention, site migrations, and client management advice.' }
    ]
  },
  {
    id: 'ai-ml-agentic-developer',
    slug: 'ai-ml-agentic-developer-course',
    title: 'AI/ML & Agentic AI Developer',
    shortDescription: 'Master machine learning models, computer vision systems, LLM chatbots, RAG, and Streamlit dashboard apps.',
    description: 'Become a job-ready artificial intelligence developer. This program covers Python, machine learning fundamentals, computer vision with OpenCV, large language models (LLMs), RAG systems, agentic AI frameworks, and Streamlit prototyping.',
    duration: '14 Weeks',
    price: '₹12,999',
    originalPrice: '₹29,999',
    discount: '56% OFF',
    icon: '🤖',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'LLMs & RAG', 'Streamlit', 'Vector Databases', 'LangChain/LlamaIndex', 'Docker', 'AWS'],
    features: [
      'Build production-ready computer vision & LLM projects',
      'Design interactive Streamlit dashboard applications',
      'Implement agentic AI chatbots & RAG systems',
      'Mentorship by senior AI/ML Engineer Sahil Prasad'
    ],
    syllabus: [
      { week: 'Weeks 1-3', topic: 'Python, Numpy, Pandas & Computer Vision', details: 'Master python coding, data analysis, image processing, object detection, and drawing overlays with OpenCV.' },
      { week: 'Weeks 4-6', topic: 'Machine Learning & Deep Learning Basics', details: 'Train classification, regression, and clustering models using PyTorch and Scikit-Learn frameworks.' },
      { week: 'Weeks 7-10', topic: 'LLMs, RAG Pipelines & Vector DBs', details: 'Connecting models via LangChain, utilizing Pinecone/ChromaDB for semantic search, and prompt engineering.' },
      { week: 'Weeks 11-14', topic: 'Streamlit dashboards, FastAPI & Cloud Deployments', details: 'Building interactive streamlit apps, exposing REST API endpoints via FastAPI, containerizing with Docker, and deploying to AWS.' }
    ]
  }
];
