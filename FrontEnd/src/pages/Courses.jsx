import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { CheckIcon, CalendarIcon, ClockIcon, BookOpenIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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
          <div className="space-y-16">
            {courses.map((course, courseIdx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: courseIdx * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800/40 rounded-2xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Details & Tech */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{course.icon}</span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {course.title}
                        </h2>
                        <div className="flex items-center gap-2 mt-1">
                          <ClockIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Duration: {course.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Technologies Covered */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Technologies You'll Master:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Syllabus Accordion */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1">
                        <BookOpenIcon className="h-4 w-4 text-indigo-600" />
                        Course Syllabus & Roadmap:
                      </h4>
                      <div className="space-y-2 border-l-2 border-indigo-100 dark:border-indigo-950 pl-4 ml-2">
                        {course.syllabus.map((item, idx) => {
                          const key = `${course.id}-${idx}`;
                          const isOpen = !!activeAccordion[key];
                          return (
                            <div key={idx} className="border-b border-gray-100 dark:border-gray-800/80 pb-2">
                              <button
                                onClick={() => toggleAccordion(course.id, idx)}
                                className="flex items-center justify-between w-full text-left py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              >
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                  {item.week}: {item.topic}
                                </span>
                                {isOpen ? (
                                  <ChevronUpIcon className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                              {isOpen && (
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 pl-1 leading-relaxed">
                                  {item.details}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Pricing & CTA */}
                  <div className="lg:col-span-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="info">{course.discount}</Badge>
                        <span className="text-xs text-green-600 dark:text-green-400 font-semibold tracking-wider uppercase">
                          Special Launch Price
                        </span>
                      </div>

                      <div className="mb-4">
                        <span className="text-gray-400 line-through text-lg mr-2">
                          {course.originalPrice}
                        </span>
                        <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                          {course.price}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">/ full course</span>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        No monthly subscriptions. Pay once and get lifetime access to all learning portals, video archives, and updates.
                      </p>

                      <ul className="space-y-3 mb-8">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      as={Link}
                      to="/contact"
                      variant="primary"
                      size="lg"
                      className="w-full text-center justify-center"
                    >
                      Enrol / Request Demo
                    </Button>
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
