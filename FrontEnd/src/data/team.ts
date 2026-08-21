export interface TeamMember {
  id: string;
  name: string;
  degree: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  instagram: string;
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'shagun-sharma',
    name: 'Shagun Sharma',
    degree: 'B.Tech Computer Science',
    role: 'Full Stack Web Developer',
    bio: 'Highly skilled full-stack developer specializing in modern JavaScript ecosystems, building interactive frontends and secure api backends.',
    image: '/assets/team/shagun.png',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    specialties: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS']
  },
  {
    id: 'ayush-gupta',
    name: 'Ayush Gupta',
    degree: 'BCA (Bachelor of Computer Applications)',
    role: 'UI/UX & WordPress Designer',
    bio: 'Creative designer passionate about crafting high-conversion WordPress websites and beautiful wireframes, user journeys, and mockups in Figma.',
    image: '/assets/team/ayush.png',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    specialties: ['Figma', 'WordPress Development', 'Elementor Pro', 'User Research']
  },
  {
    id: 'sryadeepdas',
    name: 'Sryadeep Das',
    degree: 'B.Tech & M.Tech Computer Science',
    role: 'Python Developer & Trainee',
    bio: 'Versatile programmer focusing on Python backend development, Django APIs, script automation, and AI integrations.',
    image: '/assets/team/sryadeep.png',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    specialties: ['Python Coding', 'Django & FastAPI', 'Script Automation', 'SQL Databases']
  },
  {
    id: 'shubham-singh',
    name: 'Shubham Singh',
    degree: 'B.Tech Computer Science',
    role: 'Full Stack Developer',
    bio: 'Experienced software engineer focused on developing high-performing React-based applications, database security, and system architecture.',
    image: '/assets/team/shubham.png',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    specialties: ['MERN Stack', 'Redux State Management', 'Database Security', 'Deployment Pipelines']
  }
];

export const cultureHighlights = [
  {
    title: 'Client-Centric Solutions',
    description: 'We prioritize our client requirements and focus on delivering high business value on every project.',
    icon: '🤝'
  },
  {
    title: 'Practical Teaching',
    description: 'Our courses focus on 100% hands-on project building, ensuring students land high-paying software jobs.',
    icon: '👨‍💻'
  },
  {
    title: 'Affordable Innovation',
    description: 'High-quality technical development and educational training priced affordably for the Indian market.',
    icon: '💡'
  },
  {
    title: 'Modern Architecture',
    description: 'We code using clean, secure, and future-proof technologies like React, Node.js, and Python Django.',
    icon: '🛡️'
  }
];