import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { portfolioProjects, industries, serviceTypes } from '../data/portfolio';

export default function Portfolio() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');

  const filteredProjects = portfolioProjects.filter(project => {
    const industryMatch = selectedIndustry === 'All' || project.industry === selectedIndustry;
    const serviceMatch = selectedService === 'All' || project.service === selectedService;
    return industryMatch && serviceMatch;
  });

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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover how we've helped businesses across industries achieve their digital goals and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Industry Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry
              </label>
              <div className="flex flex-wrap gap-2">
                {industries.map(industry => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      selectedIndustry === industry
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Service
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceTypes.map(service => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      selectedService === service
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} of {portfolioProjects.length} projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default">{project.industry}</Badge>
                      <Badge variant="info">{project.service}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Key Results */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      to={`/case-study/${project.slug}`}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                    >
                      View Case Study
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects match your current filters.
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  setSelectedIndustry('All');
                  setSelectedService('All');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <Button variant="secondary" size="lg" as={Link} to="/contact">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}