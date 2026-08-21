import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { CheckIcon, CalendarIcon, ClockIcon, BookOpenIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const courseCapsules = {
  'mern-stack': (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow border border-gray-100 dark:border-gray-700">
      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-lg font-bold text-blue-500 border border-blue-100 dark:border-blue-900/50">
        ⚛️
      </div>
      <span className="text-gray-400 font-bold text-xxs">→</span>
      <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center text-lg font-bold text-green-500 border border-green-100 dark:border-green-900/50">
        🟢
      </div>
    </div>
  ),
  'python-developer': (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow border border-gray-100 dark:border-gray-700">
      <div className="w-8 h-8 rounded-full bg-yellow-50 dark:bg-yellow-950/30 flex items-center justify-center text-lg font-bold border border-yellow-100 dark:border-yellow-900/50">
        🐍
      </div>
      <span className="text-gray-400 font-bold text-xxs">→</span>
      <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-[8px] font-extrabold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
        API
      </div>
    </div>
  ),
  'ui-ux-design': (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow border border-gray-100 dark:border-gray-700">
      <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-lg font-bold text-orange-500 border border-orange-100 dark:border-orange-900/50">
        🎨
      </div>
      <span className="text-gray-400 font-bold text-xxs">→</span>
      <div className="w-8 h-8 rounded-full bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-lg font-bold text-pink-500 border border-pink-100 dark:border-pink-900/50">
        📱
      </div>
    </div>
  ),
  'wordpress-developer': (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow border border-gray-100 dark:border-gray-700">
      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-lg font-bold text-blue-600 border border-blue-100 dark:border-blue-900/50">
        W
      </div>
      <span className="text-gray-400 font-bold text-xxs">→</span>
      <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center text-lg font-bold text-teal-500 border border-teal-100 dark:border-teal-900/50">
        🛒
      </div>
    </div>
  ),
  'ai-ml-agentic-developer': (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow border border-gray-100 dark:border-gray-700">
      <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-lg font-bold border border-indigo-100 dark:border-indigo-900/50">
        🤖
      </div>
      <span className="text-gray-400 font-bold text-xxs">→</span>
      <div className="w-8 h-8 rounded-full bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-[8px] font-extrabold text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/50">
        WEB
      </div>
    </div>
  )
};

export default function Courses() {
  const [activeAccordion, setActiveAccordion] = useState({});

  const toggleAccordion = (courseId, index) => {
    const key = `${courseId}-${index}`;
    setActiveAccordion(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-teal-600/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="info" className="mb-4">EduTech Offerings</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Learn From the Professionals
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We offer job-ready technical courses in India at extremely affordable prices. Build real-world projects, receive mentoring, and launch your software career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, courseIdx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: courseIdx * 0.1 }}
              >
                <div className="bg-white dark:bg-[#090D1A] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col justify-between h-full p-6 hover:shadow-lg transition-all duration-300">
                  {/* Top Area: Gradient Bubble Mockup */}
                  <div className="bg-gradient-to-br from-indigo-50/50 to-teal-50/50 dark:from-gray-900 dark:to-gray-800/80 w-full h-40 flex items-center justify-center rounded-2xl relative p-4 border border-gray-50 dark:border-gray-800">
                    <div className="transition-transform duration-500 hover:scale-105">
                      {courseCapsules[course.id]}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="pt-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="px-2.5 py-0.5 bg-indigo-50/60 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 text-[10px] font-semibold rounded-full w-max">
                        {course.duration}
                      </span>
                      
                      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-3 mb-2 leading-snug">
                        {course.title}
                      </h3>
                      
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
                        {course.shortDescription}
                      </p>

                      <div className="mb-6 pt-4 border-t border-gray-100 dark:border-gray-800/60">
                        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                          Technologies Covered:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {course.technologies.slice(0, 4).map(tech => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-[10px] font-medium text-gray-600 dark:text-gray-400 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-100 dark:border-gray-800/50">
                        <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 px-2 py-0.5 rounded uppercase tracking-wider">
                          Call us: 7088996686
                        </span>
                      </div>
                      
                      <Link
                        to={`/courses/${course.slug}`}
                        className="w-full text-center block text-xs font-semibold py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-all"
                      >
                        View Syllabus & Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/20 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Practical Learning</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Real Projects Per Course</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">1-on-1</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mentorship & Support</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">₹0</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hidden Charges</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
