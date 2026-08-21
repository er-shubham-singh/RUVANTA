import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { courses } from '../data/courses';

const courseCapsules = {
  'mern-stack': (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-5 py-3 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-xl font-bold text-blue-500 border border-blue-100 dark:border-blue-900/50">
        ⚛️
      </div>
      <span className="text-gray-400 font-bold text-xs">→</span>
      <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center text-xl font-bold text-green-500 border border-green-100 dark:border-green-900/50">
        🟢
      </div>
    </div>
  ),
  'python-developer': (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-5 py-3 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="w-10 h-10 rounded-full bg-yellow-50 dark:bg-yellow-950/30 flex items-center justify-center text-xl font-bold border border-yellow-100 dark:border-yellow-900/50">
        🐍
      </div>
      <span className="text-gray-400 font-bold text-xs">→</span>
      <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
        API
      </div>
    </div>
  ),
  'ui-ux-design': (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-5 py-3 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-xl font-bold text-orange-500 border border-orange-100 dark:border-orange-900/50">
        🎨
      </div>
      <span className="text-gray-400 font-bold text-xs">→</span>
      <div className="w-10 h-10 rounded-full bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-xl font-bold text-pink-500 border border-pink-100 dark:border-pink-900/50">
        📱
      </div>
    </div>
  ),
  'wordpress-developer': (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-5 py-3 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-xl font-bold text-blue-600 border border-blue-100 dark:border-blue-900/50">
        W
      </div>
      <span className="text-gray-400 font-bold text-xs">→</span>
      <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center text-xl font-bold text-teal-500 border border-teal-100 dark:border-teal-900/50">
        🛒
      </div>
    </div>
  ),
  'ai-ml-agentic-developer': (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-5 py-3 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-xl font-bold border border-indigo-100 dark:border-indigo-900/50">
        🤖
      </div>
      <span className="text-gray-400 font-bold text-xs">→</span>
      <div className="w-10 h-10 rounded-full bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-[10px] font-extrabold text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/50">
        WEB
      </div>
    </div>
  )
};

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);
  const [activeAccordion, setActiveAccordion] = useState({});

  if (!course) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course not found
          </h1>
          <Button as={Link} to="/courses">
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/courses"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="transition-transform duration-500 hover:scale-105">
                {courseCapsules[course.id]}
              </div>
              <div>
                <span className="px-2.5 py-0.5 bg-indigo-50/60 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 text-xs font-semibold rounded-full w-max">
                  {course.duration}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
                  {course.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4 text-indigo-600 animate-pulse" />
                  <span>Duration: {course.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Description & Syllabus */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Course Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {course.description}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Technologies You'll Master:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Syllabus Accordion */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BookOpenIcon className="h-5 w-5 text-indigo-600" />
                  Course Syllabus & Roadmap
                </h2>
                <div className="space-y-3">
                  {course.syllabus.map((item, idx) => {
                    const isOpen = !!activeAccordion[idx];
                    return (
                      <div
                        key={idx}
                        className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm"
                      >
                        <button
                          onClick={() => toggleAccordion(idx)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 dark:bg-gray-800/40 dark:hover:bg-gray-800/80 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold px-2 py-0.5 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 rounded-md">
                              {item.week}
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm">
                              {item.topic}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronUpIcon className="h-4 w-4 text-gray-500" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="p-4 bg-white dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.details}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing details & enrolment */}
            <div className="lg:col-span-5 bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-green-600 dark:text-green-400 font-semibold tracking-wider uppercase bg-green-50 dark:bg-green-950/20 px-2 py-0.5 rounded">
                  Flexible Fee Structure
                </span>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  Call us: 7088996686
                </span>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Connect with our advisors to discuss customized scheduling, batch preferences, and budget-friendly fee packages tailored for Indian students.
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                What's Included:
              </h4>
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="w-full text-center block text-sm font-semibold py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow transition-all"
                >
                  Enrol Now & Connect
                </Link>
                <a
                  href={`https://wa.me/917088996686?text=Hi%20Ruvanta,%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block text-sm font-semibold py-3 px-4 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-all"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
