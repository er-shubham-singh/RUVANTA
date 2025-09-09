import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPinIcon, ClockIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { cultureHighlights } from '../data/team';

const openPositions = [
  {
    id: 'senior-react-developer',
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'Join our frontend team to build exceptional user interfaces for our client projects.',
    requirements: [
      '5+ years of React development experience',
      'Strong TypeScript and JavaScript skills',
      'Experience with modern CSS frameworks',
      'Knowledge of testing frameworks (Jest, Cypress)',
      'Excellent communication skills'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'Create beautiful, user-centered designs that solve real business problems.',
    requirements: [
      '4+ years of UI/UX design experience',
      'Proficiency in Figma and design systems',
      'Strong portfolio showcasing web and mobile designs',
      'User research and testing experience',
      'Understanding of frontend development'
    ]
  },
  {
    id: 'project-manager',
    title: 'Technical Project Manager',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Lead cross-functional teams to deliver exceptional client projects on time and within budget.',
    requirements: [
      '3+ years of technical project management',
      'Experience with Agile/Scrum methodologies',
      'Strong client communication skills',
      'Understanding of web development processes',
      'PMP or similar certification preferred'
    ]
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    description: 'Build scalable, secure backend systems and APIs that power amazing user experiences.',
    requirements: [
      '5+ years of backend development experience',
      'Proficiency in Node.js, Python, or similar',
      'Database design and optimization skills',
      'Cloud infrastructure experience (AWS, GCP)',
      'API design and security best practices'
    ]
  },
  {
    id: 'marketing-specialist',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Contract',
    salary: '$60,000 - $80,000',
    description: 'Drive our digital marketing efforts and help grow our brand in the digital agency space.',
    requirements: [
      '3+ years of digital marketing experience',
      'SEO and content marketing expertise',
      'Social media management skills',
      'Analytics and reporting experience',
      'B2B marketing experience preferred'
    ]
  }
];

const benefits = [
  {
    icon: '🏠',
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and a global team.'
  },
  {
    icon: '🎓',
    title: 'Learning & Development',
    description: '$2,000 annual budget for courses, conferences, and certifications.'
  },
  {
    icon: '🏥',
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance plus wellness stipend.'
  },
  {
    icon: '🏖️',
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge and maintain work-life balance.'
  },
  {
    icon: '💰',
    title: 'Competitive Compensation',
    description: 'Above-market salaries plus equity and performance bonuses.'
  },
  {
    icon: '💻',
    title: 'Equipment & Setup',
    description: 'Latest MacBook Pro and $1,000 home office setup budget.'
  }
];

export default function Careers() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Help us build the future of digital experiences while growing your career with a team that values creativity, collaboration, and continuous learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe that great work happens when talented people are empowered to do their best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {cultureHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks designed to support your career and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our team and help shape the future of digital experiences.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <BanknotesIcon className="h-4 w-4 mr-1" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4 lg:mt-0">
                      <Badge variant="default">{position.department}</Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {position.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Key Requirements:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {position.requirements.map((requirement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We believe in a fair, transparent hiring process that helps us find the right fit for both you and our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Application',
                description: 'Submit your application with resume, portfolio, and cover letter.'
              },
              {
                step: '2',
                title: 'Phone Screen',
                description: '30-minute conversation about your background and our team.'
              },
              {
                step: '3',
                title: 'Technical Interview',
                description: 'Discuss your experience and approach to solving problems.'
              },
              {
                step: '4',
                title: 'Final Interview',
                description: 'Meet the team and discuss culture fit and next steps.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See a Perfect Match?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              We're always interested in hearing from talented individuals. Send us your information and let's talk about opportunities.
            </p>
            <Button variant="secondary" size="lg" as={Link} to="/contact">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}