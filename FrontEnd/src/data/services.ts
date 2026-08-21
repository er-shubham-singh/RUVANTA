export interface ServiceProcess {
  step: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  timeline: string;
  deliverables: string[];
  technologies: string[];
  priceRange: string;
  process: ServiceProcess[];
  problemStatement: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'web-app-development',
    slug: 'web-app-development',
    title: 'Web & App Development',
    shortDescription: 'Custom, high-performance web applications and mobile apps tailored to your business needs.',
    icon: '🌐',
    timeline: '4-8 weeks',
    deliverables: ['Custom frontend and backend', 'iOS & Android App (if mobile)', 'Admin Dashboard', 'Source Code & Documentation', 'Deployment support'],
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Tailwind CSS', 'Vercel / AWS'],
    priceRange: 'Starting from ₹19,999',
    process: [
      { step: 'Requirement Gathering', description: 'Discussing goals, features, target audience, and creating design outlines.' },
      { step: 'UI/UX Mockups', description: 'Designing interactive Figma mockups for review and approval.' },
      { step: 'Development', description: 'Writing clean, optimized code for both frontend and backend systems.' },
      { step: 'Testing & Launch', description: 'Rigorous bug testing, security checks, and final server deployment.' }
    ],
    problemStatement: 'Off-the-shelf software solutions can be rigid, slow, and expensive. Businesses need custom, scalable digital platforms to stand out.',
    features: [
      'Responsive design for mobile, tablet & desktop',
      'SEO and speed optimization',
      'Secure payment gateway integration',
      'Custom Content Management System (CMS)',
      'Robust user authentication and database security'
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Grow your business online with strategic Search Engine Optimization (SEO) and lead generation campaigns.',
    icon: '📈',
    timeline: 'Monthly retainer',
    deliverables: ['SEO Audit report', 'Keyword research & mapping', 'On-page & Off-page SEO execution', 'Monthly performance dashboard'],
    technologies: ['Google Analytics', 'Google Search Console', 'SEMrush / Ahrefs', 'Meta Ads Manager', 'Google Tag Manager'],
    priceRange: 'Starting from ₹9,999/month',
    process: [
      { step: 'SEO Audit & Competitor Review', description: 'Analyzing your current website rankings and identifying competitor strategies.' },
      { step: 'Strategy & Setup', description: 'Configuring analytics tools, researching keywords, and optimizing tags.' },
      { step: 'Content & Link Building', description: 'Publishing SEO-optimized content and securing high-quality backlinks.' },
      { step: 'Reporting & Fine-tuning', description: 'Reviewing analytics and search engine positions to optimize results.' }
    ],
    problemStatement: 'Simply having a website is not enough. Without proper marketing and search engine visibility, potential clients cannot find you.',
    features: [
      'Targeted keyword optimization',
      'On-page content optimization & blog writing',
      'High-quality local citation & link building',
      'Google My Business (GMB) optimization',
      'Conversion Rate Optimization (CRO)'
    ]
  },
  {
    id: 'social-media-handling',
    slug: 'social-media-handling',
    title: 'Social Media Handling',
    shortDescription: 'Manage your brand identity, engage your audience, and build a community across Instagram, LinkedIn, and Facebook.',
    icon: '📱',
    timeline: 'Monthly retainer',
    deliverables: ['Social media content calendar', 'Custom post & story designs', 'Copywriting & hashtag strategy', 'Monthly engagement report'],
    technologies: ['Figma', 'Canva', 'Meta Business Suite', 'Buffer / Hootsuite', 'Adobe Photoshop'],
    priceRange: 'Starting from ₹5,999/month',
    process: [
      { step: 'Brand Identity Analysis', description: 'Understanding your brands tone of voice, visual style, and ideal clients.' },
      { step: 'Content Strategy Planning', description: 'Drafting a monthly theme calendar with educational, promotional, and engaging content.' },
      { step: 'Design & Review', description: 'Designing eye-catching posts and writing compelling captions for approval.' },
      { step: 'Publishing & Engagement', description: 'Scheduling posts at peak times, replying to comments, and building engagement.' }
    ],
    problemStatement: 'Maintaining an active social media presence takes hours of design, writing, and constant interaction that business owners do not have.',
    features: [
      'Platform management (Instagram, LinkedIn, Facebook)',
      'Custom brand-aligned visual theme',
      'Creative caption writing & trending hashtags',
      'Profile optimization and setup',
      'Audience interaction & comment responses'
    ]
  },
  {
    id: 'ad-run-post-making',
    slug: 'ad-run-post-making',
    title: 'Ad Campaigns & Post Making',
    shortDescription: 'High-converting paid advertisements (Meta, Google Ads) combined with professional graphic design.',
    icon: '📣',
    timeline: 'Per campaign',
    deliverables: ['Custom ad creatives (images/videos)', 'Targeted ad campaign setup', 'A/B testing of ad copies', 'Leads/Sales dashboard reports'],
    technologies: ['Meta Ads Manager', 'Google Ads', 'Figma', 'Canva', 'Adobe Illustrator'],
    priceRange: 'Starting from ₹7,999/campaign',
    process: [
      { step: 'Goal Definition', description: 'Defining campaign objectives (e.g. Lead generation, product sales, brand awareness).' },
      { step: 'Ad Creative Design', description: 'Designing premium visual posts and writing copy optimized for high click-through rates.' },
      { step: 'Campaign Launch & Targeting', description: 'Setting up precise demographic, behavioral, and custom interest audiences.' },
      { step: 'Optimization & Scaling', description: 'Monitoring conversion rates, optimizing ad spends, and pausing low-performing ads.' }
    ],
    problemStatement: 'Running ads without targeting or bad graphics leads to wasted budget. High-performing ads require professional visuals and strategies.',
    features: [
      'Custom graphic designs for advertising posts',
      'Meta (Instagram/Facebook) and Google Ads execution',
      'Retargeting campaigns to capture warm leads',
      'Pixel integration and event tracking setup',
      'Cost-per-lead optimization'
    ]
  },
  {
    id: 'ai-ml-integration',
    slug: 'ai-ml-integration',
    title: 'AI & Machine Learning Integration',
    shortDescription: 'Build intelligent computer vision systems, LLM-powered custom chatbots, RAG pipelines, and Streamlit dashboards.',
    icon: '🤖',
    timeline: '3-6 weeks',
    deliverables: ['Custom LLM/RAG Chatbot', 'Computer Vision / OpenCV models', 'Streamlit Interactive Dashboard', 'REST APIs via FastAPI', 'Docker Containers & AWS Deployment'],
    technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Streamlit', 'LangChain', 'Docker', 'AWS'],
    priceRange: 'Starting from ₹24,999',
    process: [
      { step: 'Requirement & Architecture Design', description: 'Defining target AI objectives, planning pipeline schemas, database indexing, and Streamlit layouts.' },
      { step: 'Model Prep & Vector Integration', description: 'Fine-tuning LLM integration, training custom computer vision models, and building RAG pipelines.' },
      { step: 'Prototyping & Streamlit Dashboards', description: 'Developing interactive Streamlit dashboard web apps and fast backend FastAPI endpoints.' },
      { step: 'Deployment & Scaling', description: 'Containerizing services using Docker and deploying live backend instances to AWS secure servers.' }
    ],
    problemStatement: 'Off-the-shelf software tools do not adapt to custom data. Businesses need custom AI integrations, secure databases, and fast dashboards to save hours of manual analysis.',
    features: [
      'Custom RAG search over corporate PDFs/documents',
      'Production-ready OpenCV real-time object tracking or analysis',
      'User-friendly Streamlit web apps for visual data inspection',
      'Highly secure, fast API routes designed with Python FastAPI',
      'Cloud deployment on AWS with Docker scaling support'
    ]
  },
  {
    id: 'ai-chatbot-build',
    slug: 'ai-chatbot-build',
    title: 'AI Chatbot Build',
    shortDescription: 'Custom LLM-powered chatbots, intelligent conversational agents, and automated customer support bots integrated with your business data.',
    icon: '💬',
    timeline: '2-4 weeks',
    deliverables: ['Custom Chatbot UI Widget', 'LangChain / LlamaIndex integration', 'Vector database integration', 'Embeddable chat widget script', 'Admin Analytics Dashboard'],
    technologies: ['Python', 'LangChain / LlamaIndex', 'OpenAI API / Claude', 'FastAPI', 'Vector Databases', 'React', 'Streamlit', 'Docker'],
    priceRange: 'Starting from ₹14,999',
    process: [
      { step: 'Persona & Data Scope Definition', description: 'Designing target chatbot tone, behavior rules, prompt templates, and gathering corporate training documents.' },
      { step: 'Knowledge Indexing & RAG Pipeline', description: 'Parsing documents and loading them into vector databases (Chroma/Pinecone) for semantic context-aware search.' },
      { step: 'Widget UI & API Integrations', description: 'Building conversational web widgets, connecting APIs, and embedding them onto client sites.' },
      { step: 'Tuning, Testing & Launch', description: 'Refining prompt guidelines, optimizing conversation latency, and completing production server deployments.' }
    ],
    problemStatement: 'Manual customer support operations are slow and expensive, leading to lost sales opportunities. Businesses need context-aware AI chatbots that run 24/7.',
    features: [
      'Custom knowledge-base search (PDFs, docs, sites)',
      'Human-like responsive tone and brand alignment',
      'Seamless multi-platform embedding scripts',
      'Fast API configurations with latency metrics',
      'Support fallback routing triggers for humans'
    ]
  }
];
