import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { services } from '../data/services';

const service3DIllustrations = {
  'web-app-development': (
    <svg className="w-24 h-24 text-blue-500 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 35 L50 20 L90 35 L50 50 Z" fill="#111827" stroke="#3B82F6" strokeWidth="2"/>
      <path d="M10 35 L10 65 L50 80 L50 50 Z" fill="#0F172A" stroke="#3B82F6" strokeWidth="2"/>
      <path d="M50 50 L50 80 L90 65 L90 35 Z" fill="#1E293B" stroke="#3B82F6" strokeWidth="2"/>
      <circle cx="22" cy="32" r="1.5" fill="#EF4444"/>
      <circle cx="28" cy="30" r="1.5" fill="#F59E0B"/>
      <circle cx="34" cy="28" r="1.5" fill="#10B981"/>
      <path d="M22 42 L42 35 M22 48 L35 43 M22 54 L42 47" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
      <path d="M58 52 C58 48, 78 48, 78 52 C78 56, 58 56, 58 52 Z" fill="#3B82F6" opacity="0.3"/>
      <path d="M58 52 L58 70 C58 74, 78 74, 78 70 L78 52 Z" stroke="#60A5FA" strokeWidth="2" fill="none"/>
      <path d="M58 58 C58 62, 78 62, 78 58" stroke="#60A5FA" strokeWidth="1.5"/>
      <path d="M58 64 C58 68, 78 68, 78 64" stroke="#60A5FA" strokeWidth="1.5"/>
    </svg>
  ),
  'digital-marketing': (
    <svg className="w-24 h-24 text-teal-500 filter drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 55 L50 35 L85 55 L50 75 Z" fill="#0F172A" stroke="#14B8A6" strokeWidth="1.5"/>
      <path d="M30 50 L30 38 L38 34 L38 46 Z" fill="#14B8A6" opacity="0.8"/>
      <path d="M38 46 L38 34 L46 38 L46 50 Z" fill="#0D9488"/>
      <path d="M48 45 L48 22 L56 18 L56 41 Z" fill="#2DD4BF"/>
      <path d="M56 41 L56 18 L64 22 L64 45 Z" fill="#14B8A6"/>
      <path d="M66 45 L66 30 L74 26 L74 41 Z" fill="#99F6E4"/>
      <path d="M74 41 L74 26 L82 30 L82 45 Z" fill="#2DD4BF"/>
      <path d="M25 42 L42 28 L56 16 L76 22" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="76" cy="22" r="4.5" fill="#34D399"/>
    </svg>
  ),
  'social-media-handling': (
    <svg className="w-24 h-24 text-pink-500 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 45 L55 30 L80 48 L50 63 Z" fill="#1E293B" stroke="#EC4899" strokeWidth="2"/>
      <path d="M25 45 L25 50 L50 68 L50 63 Z" fill="#0F172A" stroke="#EC4899" strokeWidth="2"/>
      <path d="M50 63 L50 68 L80 53 L80 48 Z" fill="#334155" stroke="#EC4899" strokeWidth="2"/>
      <circle cx="55" cy="22" r="9" fill="#EC4899" opacity="0.9"/>
      <path d="M52 22 C52 20, 54 18, 55 19.5 C56 18, 58 20, 58 22 C58 24.5, 55 26.5, 55 26.5 C55 26.5, 52 24.5, 52 22 Z" fill="white"/>
      <rect x="25" y="16" width="22" height="12" rx="4" fill="#F43F5E"/>
      <polygon points="32,28 36,28 33,32" fill="#F43F5E"/>
      <circle cx="31" cy="22" r="2.5" fill="white"/>
      <circle cx="41" cy="22" r="2.5" fill="white"/>
    </svg>
  ),
  'ad-run-post-making': (
    <svg className="w-24 h-24 text-indigo-500 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 50 L50 30 L85 50 L50 70 Z" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.5"/>
      <path d="M35 48 L60 38 L60 56 L35 52 Z" fill="#4F46E5" stroke="#6366F1" strokeWidth="2"/>
      <ellipse cx="60" cy="47" rx="4" ry="9" fill="#818CF8" stroke="#6366F1" strokeWidth="2"/>
      <path d="M30 49 L35 48 L35 53 L30 52 Z" fill="#312E81" stroke="#6366F1" strokeWidth="1.5"/>
      <path d="M72 38 A15 15 0 0 1 72 58" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
      <path d="M78 32 A25 25 0 0 1 78 64" stroke="#A5B4FC" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"/>
    </svg>
  )
};

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive growth in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full flex flex-col justify-between rounded-2xl bg-white dark:bg-[#090D1A] border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Top Area: 3D Grid Mockup */}
                  <div 
                    className="relative w-full h-44 flex items-center justify-center bg-[#F0F5FF]/80 dark:bg-[#070A14] overflow-hidden border-b border-blue-100/50 dark:border-gray-800/60"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.12) 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  >
                    <div 
                      className="transition-transform duration-500 group-hover:scale-110"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: 'perspective(500px) rotateX(25deg) rotateY(-15deg)'
                      }}
                    >
                      {service3DIllustrations[service.id]}
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100 dark:border-gray-800/60">
                        <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 text-[10px] font-semibold rounded uppercase tracking-wider">
                          {service.timeline}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/60 px-2 py-0.5 rounded">
                          Negotiable on Call
                        </span>
                      </div>
                      
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold text-xs tracking-wider uppercase transition-colors"
                      >
                        View Service Blueprint
                        <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A proven methodology that delivers results every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Only visible on large screens) */}
            <div className="hidden lg:block absolute top-6 left-8 right-8 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -z-10 opacity-30"></div>

            {services[0].process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-100 dark:border-gray-800 p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center relative group"
              >
                {/* Step Number Circle */}
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6 shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {step.step}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss your project and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" as={Link} to="/contact">
                Request Proposal
              </Button>
              <Button variant="ghost" size="lg" as={Link} to="/we-worked" className="text-white border-white hover:bg-white hover:text-indigo-600">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}