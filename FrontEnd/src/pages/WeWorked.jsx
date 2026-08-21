import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { ArrowTopRightOnSquareIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';


export default function WeWorked() {
  return (
    <div className="bg-white  dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-teal-600/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="info" className="mb-4">Our Track Record</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              We Worked on These Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Take a look at the commercial applications and client portals we have fully designed, developed, and deployed to production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card hover className="overflow-hidden h-full flex flex-col justify-between border border-gray-100 dark:border-gray-800/80 shadow-md">
                  <div>
                    {/* Project Screenshot */}
                    <div className="relative overflow-hidden group h-56 md:h-64 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
                      <img
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback if screenshot hasn't finished downloading or fails
                          e.currentTarget.src = 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg';
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="info">{project.service}</Badge>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default">{project.industry}</Badge>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {/* Tech Used */}
                      <div className="mb-6">
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Impact Results */}
                      <div className="grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                        {project.results.map((result, rIdx) => (
                          <div key={rIdx}>
                            <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 pt-0 border-t border-gray-50 dark:border-gray-800/20">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-indigo-600 dark:border-indigo-400 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
                    >
                      Visit Live Site
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheckIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Need a high-quality product developed for your business?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            From design to launch and scaling, we handle the entire process with maximum quality and affordable prices.
          </p>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Consult With Our Experts
          </Button>
        </div>
      </section>
    </div>
  );
}
