import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { services } from '../data/services';
import { portfolioProjects } from '../data/portfolio';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Service not found
          </h1>
          <Button as={Link} to="/services">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = portfolioProjects.filter(
    project => project.service === service.title
  ).slice(0, 3);

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
              to="/services"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{service.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h1>
                <div className="flex items-center gap-4 mt-3">
                  <Badge variant="info">{service.timeline}</Badge>
                  <span className="text-lg text-gray-600 dark:text-gray-300">
                    {service.priceRange}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.problemStatement}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A structured approach that ensures successful project delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {step.step}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What's Included
              </h2>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies We Use
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {service.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-center font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-indigo-900/20 dark:to-teal-900/20 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Timeline & Investment
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Typical project duration: <strong>{service.timeline}</strong>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Starting from <strong>{service.priceRange}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Related Case Studies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how we've helped other clients with similar challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="h-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <Badge variant="info" className="mb-3">{project.industry}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="text-center mb-4">
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {project.results[0]?.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {project.results[0]?.metric}
                        </div>
                      </div>
                      <Link
                        to={`/case-study/${project.slug}`}
                        className="block w-full text-center bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your {service.title} Project?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss your specific needs and create a custom solution.
            </p>
            <Button variant="secondary" size="lg" as={Link} to="/contact">
              Request Proposal
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}